'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _routes = require('./image/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _koaRouter2.default();

_routes2.default.init(router);

router.get('/api/', async ctx => {
  ctx.body = {
    status: 'available',
    message: 'api@file-service'
  };
});

exports.default = router;
//# sourceMappingURL=routes.js.map