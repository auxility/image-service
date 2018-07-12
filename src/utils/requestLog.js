import logger from '../config/winston.user'

export default async (ctx, next) => {
  logger.info(`${ctx.method} ${ctx.url}`, {
    body: ctx.request.body,
    ip: ctx.ip
  })
  return next()
}
