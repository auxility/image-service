'use strict'

import Koa from 'koa'
import appRoot from 'app-root-path'
import bodyParser from 'koa-bodyparser'
import router from './services/api/routes'
import exceptionHandler from './utils/exceptions/handler'
import { PORT, NODE_ENV } from './config/env.config'
import logger from './config/winston'

const app = new Koa()

app
  .use((ctx, next) => {
    ctx.state.images = `${appRoot}/static/`
    return next()
  })
  .use(bodyParser({ jsonLimit: '100mb' }))
  .use(exceptionHandler)
  .use(router.routes())

export default app.listen(PORT, () => {
  logger.debug(`HTTP Server listening on port: ${PORT}`)
  logger.debug(`Environment: ${NODE_ENV}`)
})



