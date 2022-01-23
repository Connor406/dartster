import fp from "fastify-plugin"
import { PrismaClient } from "@dartster/db-main"

export default fp(async fastify => {
  fastify.decorate("prisma", new PrismaClient())
})
