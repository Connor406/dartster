import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify"

type GetGameRequest = FastifyRequest<{
  Querystring: { id: string }
}>

interface Player {
  id: string
  username: string
  score: number
}

interface Players {
  [playerX: number]: Player
}

type NewGameRequest = FastifyRequest<{
  Body: Players
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

type WinGame = FastifyRequest<{
  Body: {
    gameId: string
    winnerId: string
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
      const players = request.body
      const usernames = []
      for (const player of Object.values(players)) {
        console.log({ player })
        usernames.push(player.username)
      }
      const player1 = players[1].username
      const newGame = await fastify.prisma.game.create({
        data: {
          captain: player1,
          activePlayer: player1,
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
  fastify.put("/start", {}, async function (request: StartGame, reply: FastifyReply) {
    try {
      const { players, id } = request.body
      const activePlayer = players[1].username
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
  fastify.put("/score", {}, async function (request: UpdateScore, reply: FastifyReply) {
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

  fastify.put("/win", {}, async function (request: WinGame, reply: FastifyReply) {
    try {
      const { gameId, winnerId } = request.body
      const game = await fastify.prisma.game.update({
        where: { id: gameId },
        data: { winnerId, activePlayer: null },
      })
      const loserIds: string[] = []
      for (const v of Object.values(game.players)) {
        // @ts-ignore
        loserIds.push(v)
      }
      console.log("🚨", loserIds)
      const winner = await fastify.prisma.user.update({
        where: { id: winnerId },
        data: {
          gameId: null,
          user_stats: {
            update: { wins: { increment: 1 }, points: { increment: 100 } },
          },
        },
        select: { id: true, username: true, user_stats: true },
      })
      // update losers
      const losers = loserIds.map(loser => {
        return fastify.prisma.user.update({
          where: { id: loser },
          data: {
            gameId: null,
            user_stats: {
              update: { losses: { increment: 1 }, points: { decrement: 5 } },
            },
          },
        })
      })
      await fastify.prisma.$transaction(losers)
      reply.send({ game, winner, losers })
    } catch (error) {
      fastify.httpErrors.badRequest(error)
      reply.code(400).send(error)
    }
  })
}

export default gameRoutes
