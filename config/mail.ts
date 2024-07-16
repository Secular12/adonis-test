import env from '#start/env'
import { defineConfig } from '@adonisjs/mail'
import { postMarkTransport } from '../transports/postmark_transport.js'

const mailConfig = defineConfig({
  mailers: {
    postmark: postMarkTransport({
      auth: {
        apiKey: env.get('POSTMARK_API_KEY'),
      },
    }),
  },
})

export default mailConfig

declare module '@adonisjs/mail/types' {
  export interface MailersList extends InferMailers<typeof mailConfig> {}
}