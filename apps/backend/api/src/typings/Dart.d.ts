import { FastifyRequest } from "fastify"

declare global {
  namespace Dart {
    type SendEmailPayload = {
      to: string
      subject: string
      html: string
      attachments?: Array<{ filename: string; path: string }>
    }
    type CreateUser = FastifyRequest<{
      Body: {
        firstName: string
        lastName: string
        username: string
        email: string
        password: string
      }
    }>

    type LogUserIn = FastifyRequest<{
      Body: {
        username: string
        password: string
      }
    }>

    type VerifyEmail = FastifyRequest<{
      Body: {
        email: string
        token: string
      }
    }>

    type GetUser = FastifyRequest<{
      Querystring: { username: string }
    }>
  }
}
