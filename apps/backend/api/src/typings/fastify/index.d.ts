import { PrismaClient } from "@prisma/client"
import nodemailer from "fastify-nodemailer"
import Axios from "axios"

declare module "fastify" {
  export interface FastifyInstance {
    sendEmail: (payload: Dart.SendEmailPayload) => Promise<boolean>
    axios: typeof Axios
    prisma: PrismaClient
    nodemailer: Nodemailer & typeof nodemailer
  }
}

interface NodemailerPayload {
  from: string
  to: string
  subject: string
  html: string
  attachments?: Array<{ filename: string; path: string }>
}

interface MailerErrorInfo {
  Info: (err: Error, info: any) => any
}
interface Nodemailer {
  sendMail: (payload: NodemailerPayload, info: MailerErrorInfo["Info"]) => Promise<unknown>
  getTestMessageUrl: any
}
