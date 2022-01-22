import * as crypto from "crypto"
import fastify from "fastify"
const { ROOT_ADDRESS, JWT_SECRET } = process.env

export async function createVerifyEmailToken(email) {
  try {
    // Auth string, JWT Secret, email
    const authString = `${JWT_SECRET}:${email}`
    return crypto.createHash("sha256").update(authString).digest("hex")
  } catch (e) {
    console.error(e)
  }
}

export async function createVerifyEmailLink(email) {
  try {
    // create token
    const emailToken = await createVerifyEmailToken(email)
    // encode url string
    const UriEncodedEmail = encodeURIComponent(email)
    // return link for verification
    return `${ROOT_ADDRESS}/verify/${UriEncodedEmail}/${emailToken}`
  } catch (e) {
    console.error(e)
  }
}

export async function validateVerifyEmail(fastify, token, email) {
  try {
    const emailToken = await createVerifyEmailToken(email)
    const isValid = emailToken === token
    if (isValid) {
      await fastify.prisma.user.updateOne({
        where: { "email.address": email },
        data: { "email.verified": true },
      })
      return true
    }
    return false
  } catch (err) {
    throw new Error(err)
  }
}
