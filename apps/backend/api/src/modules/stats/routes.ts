import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify"

type StatsRequest = FastifyRequest<{
  Querystring: { id: string }
}>

type GameRequest = FastifyRequest<{
  Body: {
    gameId: string
    winner: { id: string; wins: number }
    loser: { id: string; losses: number }
  }
}>

const userRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", {}, async function (request: StatsRequest, reply: FastifyReply) {
    try {
      const { id } = request.query
      const stats = await fastify.prisma.user.findUnique({
        where: { id },
        select: { id: true, user_stats: true, username: true },
      })
      reply.send({ stats })
    } catch (error) {
      throw fastify.httpErrors.badRequest(error)
    }
  }),
    fastify.post("/game", {}, async function (request: GameRequest, reply: FastifyReply) {
      try {
        const data = request.body
        const winner = await fastify.prisma.user_stats.update({
          where: { user_id: data.winner.id },
          data: { wins: data.winner.wins },
        })
        const loser = await fastify.prisma.user_stats.update({
          where: { user_id: data.loser.id },
          data: { losses: data.loser.losses },
        })
        reply.send({ winner, loser })
      } catch (error) {
        fastify.httpErrors.badRequest(error)
      }
    })
}

export default userRoutes
