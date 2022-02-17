import { FastifyPluginAsync, FastifyRequest } from "fastify"

const traffic: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get(
    "/",
    {},
    async function (
      request: FastifyRequest<{ Querystring: { location: "connorcodes" | "dartmule" } }>,
      reply
    ) {
      const { location } = request.query

      await fastify.prisma.traffic.create({
        data: {
          ip: request.headers["x-forwarded-for"],
          user_agent: request.headers["user-agent"],
          connorcodes: location === "connorcodes",
          dartmule: location === "dartmule",
          first_visit: new Date(),
          last_visit: new Date(),
        },
      })
      reply.send("Thanks for visiting!")
    }
  )
}

export default traffic
