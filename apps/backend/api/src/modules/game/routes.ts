import { game, user } from "@dartster/db-main"
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify"
import { nanoid } from "nanoid"

type GetGameRequest = FastifyRequest<{
  Querystring: { id: string }
}>

type NewGameRequest = FastifyRequest<{
  Body: {
    players: string[]
    startingScore: number
    // set to player who started game
    captain: string
  }
}>

type StartGame = FastifyRequest<{
  Body: {
    id: string
    players: string[]
  }
}>

type UpdateScore = FastifyRequest<{
  Body: {
    id: user["id"]
    gameId: game["id"]
    score: number
    nextPlayer: string
  }
}>

const gameRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post("/new", {}, async function (request: NewGameRequest, reply: FastifyReply) {
    try {
      const { players, startingScore } = request.body
      const newGame = await fastify.prisma.game.create({
        data: {
          winnerId: "",
          captain: players[0],
          playerOrder: players,
          activePlayer: players[0],
          started: false,
        },
      })
      await fastify.prisma.user.updateMany({
        where: { username: { in: request.body.players } },
        data: { gameId: newGame.id, score: startingScore },
      })
      reply.send({ newGame, startingScore })
    } catch (error) {
      fastify.httpErrors.badRequest(error)
      reply.code(400).send(error)
    }
  }),
    fastify.get("/", {}, async function (request: GetGameRequest, reply: FastifyReply) {
      try {
        const { id } = request.query
        const users = await fastify.prisma.user.findMany({
          where: { gameId: id },
          select: {
            id: true,
            username: true,
            score: true,
            game: true,
          },
        })
        reply.send({ users })
      } catch (error) {
        fastify.httpErrors.badRequest(error)
        reply.code(400).send(error)
      }
    })
  fastify.post("/start", {}, async function (request: StartGame, reply: FastifyReply) {
    try {
      const { players, id } = request.body
      const activePlayer = players[0]
      const game = await fastify.prisma.game.update({
        where: { id },
        data: { activePlayer, playerOrder: players, started: true },
      })
      reply.send({ game })
    } catch (error) {
      fastify.httpErrors.badRequest(error)
      reply.code(400).send(error)
    }
  }),
    fastify.post("/update-score", {}, async function (request: UpdateScore, reply: FastifyReply) {
      try {
        const { id, score, gameId, nextPlayer } = request.body
        const user = await fastify.prisma.user.update({
          where: { id },
          data: { score },
          select: { score: true, id: true, game: true },
        })
        const game = await fastify.prisma.game.update({
          where: { id: gameId },
          data: { activePlayer: nextPlayer },
        })
        reply.send({ status: "OK", user, game })
      } catch (error) {
        fastify.httpErrors.badRequest(error)
        reply.code(400).send(error)
      }
    })
}

export default gameRoutes
