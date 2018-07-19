import controller from './controller'

export default {
  init: function (router) {
    router.get('/api/images/:imageName', controller.get)
    router.post('/api/images', controller.post)
  }
}
