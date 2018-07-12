'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Exception = require('./Exception.class');

var _winston = require('../config/winston.user');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (ctx, next) => {
  try {
    return await next();
  } catch (err) {
    if (err instanceof _Exception.Exception) {
      _winston2.default.error(err.toObject());
      ctx.body = err.toObject();
      ctx.status = err.statusCode;
    } else {
      _winston2.default.error(err.message);
      ctx.body = { message: 'Unexpected error' };
      ctx.status = 500;
    }
  }
};
//# sourceMappingURL=exceptionHandler.js.map