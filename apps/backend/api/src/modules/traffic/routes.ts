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
      const { ip } = request

      await fastify.prisma.traffic.upsert({
        where: { ip },
        update: {
          connorcodes: location === "connorcodes" ?? undefined,
          dartmule: location === "dartmule" ?? undefined,
          vists: { increment: 1 },
        },
        create: {
          ip,
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
