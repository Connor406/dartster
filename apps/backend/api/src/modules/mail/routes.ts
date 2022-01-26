import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify"
import { validateVerifyEmail } from "./helpers"

const userRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  //! TODO: delete this whole shebang - refactor 'helper' to a plugin
  // fastify.get("/verify", {}, async function (request: Dart.VerifyEmail, reply: FastifyReply) {
  //   try {
  //     const { token, email } = request.body
  //     const isValid = await validateVerifyEmail(fastify, token, email)
  //     if (isValid) {
  //       return reply.send("success")
  //     }
  //     return reply.code(401).send("email not verified")
  //   } catch (error) {
  //     throw fastify.httpErrors.badRequest(error)
  //   }
  // })
}

export default userRoutes
