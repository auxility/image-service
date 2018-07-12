import controller from './controller'

export default {
  init: function (router) {
    router.get('/api/image/:fileName', controller.get)
    router.post('/api/image', controller.post)
  }
}
