import * as jwt from "jsonwebtoken"
import { genSalt, hash, compare } from "bcryptjs"
import { user } from "@prisma/client"
import { FastifyInstance } from "fastify"

const { ROOT_DOMAIN, JWT_SECRET } = process.env

export async function createTokens(sessionToken, userId) {
  try {
    const refreshToken = jwt.sign({ sessionToken }, JWT_SECRET!)
    const accessToken = jwt.sign({ sessionToken, userId }, JWT_SECRET!)
    return { accessToken, refreshToken }
  } catch (error) {
    console.error(error)
  }
}

export async function logUserOut(request, reply, fastify) {
  try {
    if (request?.cookies?.refreshToken) {
      const { refreshToken } = request.cookies
      const { sessionToken }: any = jwt.verify(refreshToken, JWT_SECRET!)
      await fastify.prisma.session.delete({ where: { sessionToken } })
    }
    const cookieOpts = {
      path: "/",
      domain: ROOT_DOMAIN,
      httpOnly: true,
      secure: true,
    }
    reply.clearCookie("refreshToken", cookieOpts).clearCookie("accessToken", cookieOpts).send()
  } catch (error) {
    console.error(error)
  }
}

export async function setUserCookies(reply, sessionToken, userId) {
  const token = await createTokens(sessionToken, userId)
  if (!token) throw new Error("unable to generate token")
  reply
    .setCookie("refreshToken", token.refreshToken, {
      path: "/",
      domain: ROOT_DOMAIN,
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 30,
    })
    .setCookie("accessToken", token.accessToken, {
      path: "/",
      domain: ROOT_DOMAIN,
      httpOnly: true,
      secure: true,
    })
}

export async function returnUserFromAccessToken(fastify, request) {
  try {
    const { accessToken } = request.cookies
    const decodedAccessToken: any = jwt.verify(accessToken, JWT_SECRET!)
    const user = await fastify.prisma.user.findUnique({
      where: { id: decodedAccessToken?.userId },
      select: {
        password: false,
        username: true,
        firstName: true,
        lastName: true,
        email: true,
        id: true,
        user_stats: true,
        score: true,
        game: true,
        gameId: true,
      },
    })
    return user
  } catch (error) {
    throw fastify.httpErrors.badRequest(error)
  }
}

export async function refreshTokens(request, fastify) {
  const { refreshToken } = request.cookies
  const { sessionToken }: any = jwt.verify(refreshToken, JWT_SECRET!)
  const currentSession = await fastify.prisma.session.findUnique({
    where: { sessionToken },
  })
  if (currentSession.valid) {
    // look up user
    const user = await fastify.prisma.user.findUnique({
      where: { id: currentSession.userId },
      select: {
        password: false,
        username: true,
        firstName: true,
        lastName: true,
        email: true,
        id: true,
      },
    })
    return { user, sessionToken }
  }
}

export async function createNewSession(fastify, sessionToken, request, userId) {
  await fastify.prisma.session.create({
    data: {
      sessionToken,
      userId,
      userAgent: request.headers["user-agent"],
      ip: request.ip,
      valid: true,
      updatedAt: new Date(),
      createdAt: new Date(),
    },
  })
}

export async function authorizeUser(fastify, username, password) {
  const user = await fastify.prisma.user.findUnique({ where: { username } })
  const dbPassword = user.password
  const isAuthorized = await compare(password, dbPassword)
  return { isAuthorized, user }
}

export async function getUserFromCookies(fastify, request, reply) {
  if (request?.cookies?.accessToken) {
    const user: user = await returnUserFromAccessToken(fastify, request)
    return { user }
  } else if (request?.cookies?.refreshToken) {
    const { user, sessionToken } = await refreshTokens(request, fastify)
    await setUserCookies(reply, sessionToken, user.id)
    return { user }
  } else {
    return { user: null }
  }
}

export async function changePassword(fastify: FastifyInstance, userId, newPassword) {
  try {
    const salt = await genSalt(10)
    const password = await hash(newPassword, salt)
    return await fastify.prisma.user.update({ where: { id: userId }, data: { password } })
  } catch (err) {
    throw fastify.httpErrors.badRequest(err)
  }
}
