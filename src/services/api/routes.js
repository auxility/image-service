import Router from 'koa-router'
import ImageRoutes from './image/routes'

const router = new Router()

ImageRoutes.init(router)

router.get('/api/', async (ctx) => {
  ctx.body = {
    status: 'available',
    message: 'api@file-service'
  }
})

export default router
