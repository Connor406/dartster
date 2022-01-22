import * as jwt from "jsonwebtoken"

const JWTSecret = process.env.JWT_SECRET
const { ROOT_DOMAIN } = process.env

export async function createTokens(sessionToken, userId) {
  try {
    const refreshToken = jwt.sign({ sessionToken }, JWTSecret!)
    const accessToken = jwt.sign({ sessionToken, userId }, JWTSecret!)
    return { accessToken, refreshToken }
  } catch (error) {
    console.error(error)
  }
}

export async function logUserOut(request, reply, fastify) {
  try {
    if (request?.cookies?.refreshToken) {
      const { refreshToken } = request.cookies
      const { sessionToken }: any = jwt.verify(refreshToken, JWTSecret!)
      await fastify.prisma.session.delete({ where: { sessionToken } })
    }
    reply.clearCookie("refreshToken").clearCookie("accessToken").send()
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
    const decodedAccessToken: any = jwt.verify(accessToken, JWTSecret!)
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
  const { sessionToken }: any = jwt.verify(refreshToken, JWTSecret!)
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
