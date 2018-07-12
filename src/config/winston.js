import appRoot from 'app-root-path'
import { createLogger, format, transports } from 'winston'
import { DRYRUN } from './env.config'

const options = {
  error: {
    name: 'error-file',
    level: 'error',
    filename: `${appRoot}/logs/error.log`,
    handleExceptions: true,
    maxsize: 5242880,
    maxFiles: 5
  },
  info: {
    name: 'info-file',
    level: 'info',
    filename: `${appRoot}/logs/info.log`,
    handleExceptions: true,
    maxsize: 5242880,
    maxFiles: 5
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    format: format.combine(format.colorize(), format.simple())
  }
}

// IF DRYRUN ENABLED LOG CONFIGURATION IS EMPTY
const logger = DRYRUN ? createLogger({}) : createLogger({
  transports: [
    new transports.File(options.error),
    new transports.File(options.info),
    new transports.Console(options.console)
  ],
  exitOnError: false
})

export default logger
