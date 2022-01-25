import { FastifyPluginAsync } from "fastify"

const health: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", {}, async function (request, reply) {
    fastify.io.emit("hello", "world")
    reply.send({ status: "good to go" })
  })
}

export default health
