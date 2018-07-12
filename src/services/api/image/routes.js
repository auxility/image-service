import controller from './controller'

export default {
  init: function (router) {
    router.get('/api/image', controller.get)
  }
}
