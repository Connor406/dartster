import * as dotenv from "dotenv"
dotenv.config({ path: ".env" })
import fastify, { FastifyPluginAsync, FastifyServerOptions, FastifyInstance } from "fastify"
import fastifyCookie from "fastify-cookie"
import AutoLoad, { AutoloadPluginOptions } from "fastify-autoload"
import fastifyIO from "fastify-socket.io"
import { join } from "path"

export type AppOptions = Partial<AutoloadPluginOptions>

const app: FastifyPluginAsync<AppOptions> = async (fastify, opts): Promise<void> => {
  void fastify.register(fastifyCookie, {
    secret: process.env.COOKIE_SECRET,
  })
  void fastify.register(import("fastify-cors"), {
    strictPreflight: false,
    credentials: true,
    origin: "*",
    exposedHeaders: "Content-Disposition",
    methods: ["GET", "PUT", "POST", "DELETE"],
  })
  void fastify.register(fastifyIO, {
    cors: {
      origin: true,
      methods: ["GET", "POST"],
    },
  })
  void fastify.register(import("fastify-sensible"))
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "/plugins"),
    options: opts,
  })
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "/modules"),
    indexPattern: /.*routes(\.ts|\.js|\.cjs|\.mjs)$/,
    options: opts,
  })
}

export default function createServer(opts?: FastifyServerOptions): FastifyInstance {
  const server = fastify(opts)
  app(server, {})
  return server
}
