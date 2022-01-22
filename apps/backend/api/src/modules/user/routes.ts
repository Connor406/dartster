import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify"
import { genSalt, hash, compare } from "bcryptjs"
import * as crypto from "crypto"
import {
  createNewSession,
  logUserOut,
  refreshTokens,
  returnUserFromAccessToken,
  setUserCookies,
} from "./helpers"
import { createVerifyEmailLink } from "../mail/helpers"

const { JWT_SECRET } = process.env

const userRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/me", {}, async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      if (request?.cookies?.accessToken) {
        const user = await returnUserFromAccessToken(fastify, request)
        reply.send({ user })
      } else if (request?.cookies?.refreshToken) {
        const { user, sessionToken } = await refreshTokens(request, fastify)
        await setUserCookies(reply, sessionToken, user.id)
        reply.send({ user })
      } else {
        reply.send({ user: null })
      }
    } catch (error) {
      throw fastify.httpErrors.badRequest(error)
    }
  }),
    fastify.get("/", {}, async function (request: Dart.GetUser, reply: FastifyReply) {
      try {
        const { username } = request.query
        const users = await fastify.prisma.user.findMany({
          where: { username: { startsWith: username } },
          select: { username: true, id: true },
          take: 4,
        })
        if (users) {
          reply.send(users)
        } else {
          reply.code(400).send("unable to find user")
        }
      } catch (err) {
        throw fastify.httpErrors.badRequest(err)
      }
    }),
    fastify.post("/register", {}, async function (request: Dart.CreateUser, reply: FastifyReply) {
      try {
        const { firstName, lastName, username, email, password } = request.body
        const salt = await genSalt(10)
        const hashedPassword = await hash(password, salt)

        const user = await fastify.prisma.user.create({
          data: {
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        })
        await fastify.prisma.user_stats.create({ data: { user_id: user.id } })

        if (user) {
          const emailLink = await createVerifyEmailLink(request.body.email)
          await fastify.sendEmail({
            to: request.body.email,
            subject: "Verify your email",
            html: `<div><h1>So we know you're not a robot...</h1><a href="${emailLink}">Verify</a></div>`,
          })

          const sessionToken = crypto.randomBytes(42).toString("hex")
          await createNewSession(fastify, sessionToken, request, user.id)
          await setUserCookies(reply, sessionToken, user.id)
          reply.send({ user: user.username })
        } else {
          reply.code(201).send({ error: "Unable to create user", where: " " })
        }
      } catch (error) {
        reply.code(201).send({ error: error.code, where: error.meta.target })
        throw fastify.httpErrors.badRequest(error)
      }
    }),
    fastify.post("/verify", {}, async function (request: Dart.VerifyEmail, reply: FastifyReply) {
      try {
        const { email, token } = request.body
        // create hash with email / token
        const authString = `${JWT_SECRET}:${email}`
        const createdToken = crypto.createHash("sha256").update(authString).digest("hex")
        if (token === createdToken) {
          const user = await fastify.prisma.user.update({
            where: { email },
            data: { verified: true },
          })
          reply.send(`${user.email} verified`)
        } else {
          reply.code(400).send("unable to verify email")
        }
      } catch (e) {
        reply.send(e.message)
        throw fastify.httpErrors.badRequest(e)
      }
    }),
    fastify.post("/login", {}, async function (request: Dart.LogUserIn, reply: FastifyReply) {
      try {
        const { username, password } = request.body
        const user = await fastify.prisma.user.findUnique({ where: { username } })
        const dbPassword = user.password
        const sessionToken = crypto.randomBytes(42).toString("hex")
        const isAuthorized = await compare(password, dbPassword)
        if (isAuthorized) {
          await createNewSession(fastify, sessionToken, request, user.id)
          await setUserCookies(reply, sessionToken, user.id)
          reply.send(`User ${user.username} logged in`)
        } else {
          reply.send({ error: "Unable to authorize user" })
        }
      } catch (error) {
        throw fastify.httpErrors.badRequest(error)
      }
    }),
    fastify.post("/logout", {}, async function (request: FastifyRequest, reply: FastifyReply) {
      try {
        await logUserOut(request, reply, fastify)
        reply.send({ success: "user logged out" })
      } catch (error) {
        throw fastify.httpErrors.badRequest(error)
      }
    })
}

export default userRoutes
