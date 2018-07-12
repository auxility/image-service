'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _routes = require('./services/api/routes');

var _routes2 = _interopRequireDefault(_routes);

var _exceptionHandler = require('./utils/exceptionHandler');

var _exceptionHandler2 = _interopRequireDefault(_exceptionHandler);

var _requestLog = require('./utils/requestLog');

var _requestLog2 = _interopRequireDefault(_requestLog);

var _winston = require('./config/winston.user');

var _winston2 = _interopRequireDefault(_winston);

var _env = require('./config/env.config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();

app.use((0, _koaBodyparser2.default)()).use(_requestLog2.default).use(_exceptionHandler2.default).use(_routes2.default.routes());

exports.default = app.listen(_env.PORT, () => {
  _winston2.default.debug(`HTTP Server listening on port: ${_env.PORT}`);
  _winston2.default.debug(`Environment: ${_env.NODE_ENV}`);
});
//# sourceMappingURL=index.js.map