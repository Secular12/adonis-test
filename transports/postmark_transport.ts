import nodemailer from 'nodemailer'
import nodemailerTransport from 'nodemailer-postmark-transport'

import { MailResponse } from '@adonisjs/mail'
import type {
  NodeMailerMessage,
  MailTransportContract,
  MailManagerTransportFactory
} from '@adonisjs/mail/types'

/**
 * Configuration accepted by the transport
 */
export type PostMarkConfig = {
  auth: {
    apiKey: string
  }
}

export function postMarkTransport(
    config: PostMarkConfig
  ): MailManagerTransportFactory {
    return () => {
      return new PostMarkTransport(config)
    }
  }

/**
 * Transport implementation
 */
export class PostMarkTransport implements MailTransportContract {
  #config: PostMarkConfig
  constructor(config: PostMarkConfig) {
    this.#config = config
  }

  #createNodemailerTransport(config: PostMarkConfig) {
    return nodemailer.createTransport(nodemailerTransport(config))
  }

  async send(
    message: NodeMailerMessage,
    config?: PostMarkConfig
  ): Promise<MailResponse> {
    /**
     * Create nodemailer transport
     */
    const transporter = this.#createNodemailerTransport({
      ...this.#config,
      ...config,
    })

    /**
     * Send email
     */
    const response = await transporter.sendMail(message)

    /**
     * Normalize response to an instance of the "MailResponse" class
     */
    return new MailResponse(response.messageId, response.envelope, response)
  }
}
