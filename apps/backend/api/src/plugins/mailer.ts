import fp from "fastify-plugin"
import nodemailer from "fastify-nodemailer"

declare module "fastify" {
  export interface FastifyInstance {
    sendEmail: (payload: Dart.SendEmailPayload) => Promise<boolean>
    // @ts-ignore
    nodemailer: Nodemailer
  }
}

interface NodemailerPayload {
  from: string
  to: string
  subject: string
  html: string
  attachments?: Array<{ filename: string; path: string }>
}

interface Nodemailer {
  sendMail: (payload: NodemailerPayload) => Promise<unknown>
}

const SMTP_USER: string = process.env.SMTP_USER || ""
const SMTP_PASSWORD: string = process.env.SMTP_PASSWORD || ""
const SMTP_PORT: string = process.env.SMTP_PORT || "465"
const SMTP_HOST: string = process.env.SMTP_HOST || "smtp.gmail.com"
const SMTP_SECURE = process.env.SMTP_SECURE
const secure = SMTP_SECURE === undefined ? true : SMTP_SECURE === "false" ? false : true

export default fp(async fastify => {
  fastify.register(nodemailer, {
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  })
  fastify.decorate(
    "sendEmail",
    async function ({ to, subject, html, attachments }: Dart.SendEmailPayload) {
      try {
        await fastify.nodemailer.sendMail(
          {
            from: SMTP_USER,
            to,
            subject,
            html,
            attachments,
          },
          (err: Error, info: any) => {
            if (err) {
              console.log("Error occurred. " + err.message)
              return process.exit(1)
            }

            console.log("Message sent: %s", info.messageId)
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", fastify.nodemailer.getTestMessageUrl(info))
          }
        )
        console.log(fastify.nodemailer.getTestMessageUrl())
        return true
      } catch (err) {
        fastify.log.error(err)
        return false
      }
    }
  )
})
