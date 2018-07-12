'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _appRootPath = require('app-root-path');

var _appRootPath2 = _interopRequireDefault(_appRootPath);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _env = require('./env.config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const options = {
  error: {
    name: 'error-file',
    level: 'error',
    filename: `${_appRootPath2.default}/logs/error.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: true
  },
  info: {
    name: 'info-file',
    level: 'info',
    filename: `${_appRootPath2.default}/logs/info.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: true
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  }

  // IF DRYRUN ENABLED LOG CONFIGURATION IS EMPTY
};const logger = _env.DRYRUN ? new _winston2.default.Logger({}) : new _winston2.default.Logger({
  transports: [new _winston2.default.transports.File(options.error), new _winston2.default.transports.File(options.info), new _winston2.default.transports.Console(options.console)],
  exitOnError: false
});

exports.default = logger;
//# sourceMappingURL=winston.user.js.map