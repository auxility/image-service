"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Exception extends Error {
  constructor(statusCode, message, payload) {
    super(message);
    this._statusCode = statusCode;
    this._payload = payload;
  }
  get statusCode() {
    return this._statusCode;
  }
  get payload() {
    return this._payload;
  }
  toObject() {
    const res = {
      status: this._statusCode,
      message: this.message
    };
    if (this._payload) {
      res.payload = this._payload;
    }
    return res;
  }
}
exports.Exception = Exception;
//# sourceMappingURL=Exception.class.js.map