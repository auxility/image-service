import Router from 'koa-router'
import ImagesRoutes from './images/routes'
import { NODE_ENV } from '../../config/env.config'

const router = new Router()

ImagesRoutes.init(router)

router.get('/api/', async (ctx) => {
  ctx.body = {
    status: 'available',
    info: 'image-service',
    environment: NODE_ENV,
    releaseDate: new Date('2018-07-19T00:00:00.000Z').toDateString(),
    startDate: new Date().toString(),
    version: '2'
  }
})

export default router
