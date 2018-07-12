'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exampleSchema = undefined;

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const exampleSchema = exports.exampleSchema = _joi2.default.object().keys({
  exampleNumber: _joi2.default.string().required().trim().min(2).max(40)
});
//# sourceMappingURL=models.js.map