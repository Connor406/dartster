import createServer from "./server"

const port: string = process.env.PORT || "3333"

const start = async () => {
  const fastify = createServer({
    logger: true,
    ignoreTrailingSlash: true,
    pluginTimeout: 0, // https://github.com/fastify/help/issues/188
  })
  try {
    await fastify.listen(port, "0.0.0.0")
    console.log("🚀 Listening on port: ", port)
  } catch (err) {
    fastify.log.error(err)
    console.log("NOT GOOD!")
    process.exit(1)
  }
}

start()
