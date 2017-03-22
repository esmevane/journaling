import Logger, { Loggable } from "../../logger"
import Service, { Serveable } from "../../service"
import { CliAction, CliCommand, CliOptions, defaults } from "../index"

export const DESC = "Starts a journaling service in the background"
export const COMMAND = "start"
export const SUCCESS = "Journaling service started."
export const FAILURE = "Unable to start journaling service."

export default class Start {
  public service: Serveable
  public logger: Loggable

  constructor(givenOptions: Partial<CliOptions> = {}) {
    const options = { ...defaults, ...givenOptions }

    this.logger = options.logger
    this.service = options.service
  }

  toCommand(): CliCommand {
    return {
      command: COMMAND,
      desc: DESC,
      builder: () => {},
      handler: () => this.perform()
    }
  }

  async perform(): Promise<void> {
    try {
      await this.service.start()
      await this.logger.info(SUCCESS)
    } catch(error) {
      await this.logger.error(FAILURE)
    }
  }
}