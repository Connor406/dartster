import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify"

type GetGameRequest = FastifyRequest<{
  Querystring: { id: string }
}>

interface Players {
  [playerX: string]: { username: string; score: number }
}

type NewGameRequest = FastifyRequest<{
  Body: {
    players: Players
  }
}>

type StartGame = FastifyRequest<{
  Body: {
    id: string
    players: Players
  }
}>

type UpdateScore = FastifyRequest<{
  Body: {
    id: string
    players: Players
    nextPlayer: string
  }
}>

const gameRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", {}, async function (request: GetGameRequest, reply: FastifyReply) {
    try {
      const { id } = request.query
      const game = await fastify.prisma.game.findUnique({
        where: { id },
      })
      reply.send(game)
    } catch (error) {
      fastify.httpErrors.badRequest(error)
      reply.code(400).send(error)
    }
  })
  fastify.post("/new", {}, async function (request: NewGameRequest, reply: FastifyReply) {
    try {
      const { players } = request.body
      const usernames = []
      for (const v of Object.values(players)) {
        usernames.push(v.username)
      }
      const newGame = await fastify.prisma.game.create({
        data: {
          captain: players.player1.username,
          activePlayer: players.player1.username,
          started: false,
          players,
        },
      })
      await fastify.prisma.user.updateMany({
        where: { username: { in: usernames } },
        data: { gameId: newGame.id },
      })
      reply.send(newGame)
    } catch (error) {
      fastify.httpErrors.badRequest(error)
      reply.code(400).send(error)
    }
  })
  fastify.post("/start", {}, async function (request: StartGame, reply: FastifyReply) {
    try {
      const { players, id } = request.body
      const activePlayer = players.player1.username
      const game = await fastify.prisma.game.update({
        where: { id },
        data: { activePlayer, players, started: true },
      })
      reply.send(game)
    } catch (error) {
      fastify.httpErrors.badRequest(error)
      reply.code(400).send(error)
    }
  })
  fastify.post("/update-score", {}, async function (request: UpdateScore, reply: FastifyReply) {
    try {
      const { id, players, nextPlayer } = request.body
      const game = await fastify.prisma.game.update({
        where: { id },
        data: { players, activePlayer: nextPlayer },
      })
      fastify.io.emit("score", { status: "OK", game })
      reply.send({ status: "OK", game })
    } catch (error) {
      fastify.httpErrors.badRequest(error)
      reply.code(400).send(error)
    }
  })
}

export default gameRoutes
