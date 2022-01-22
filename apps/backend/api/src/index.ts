import fastify, { FastifyRequest } from "fastify"
import { config } from "dotenv"
import { green } from "chalk"
import { PrismaClient as DBMain } from "@dartster/db-main"

config()

const PORT = process.env.PORT || "1234"
const HOST = "0.0.0.0"

export async function startServer() {
  const client = new DBMain()
  const server = fastify()

  server.get("/", function (_request, reply) {
    reply.send({ hello: "world 3" })
  })

  server.get("/api/users", async (_request, reply) => {
    const users = await client.user.findMany()
    reply.send(users)
  })

  try {
    await server.ready()
    console.log(`Server listening on... ${green(`${HOST}:${PORT}`)} 🚀`)
    await server.listen(PORT, HOST)
  } catch (err) {
    cleanup(err)
  }

  process.on("unhandledRejection", cleanup)

  function cleanup(err: unknown) {
    console.error(err)
    process.exit(1)
  }
}

startServer()
