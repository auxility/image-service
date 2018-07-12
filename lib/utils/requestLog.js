'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _winston = require('../config/winston.user');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (ctx, next) => {
  _winston2.default.info(`${ctx.method} ${ctx.url}`, {
    body: ctx.request.body,
    ip: ctx.ip
  });
  return next();
};
//# sourceMappingURL=requestLog.js.map