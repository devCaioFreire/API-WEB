"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/middlewares/errorMiddleware/ErrorMiddleware.ts
var ErrorMiddleware_exports = {};
__export(ErrorMiddleware_exports, {
  ErrorMiddleware: () => ErrorMiddleware
});
module.exports = __toCommonJS(ErrorMiddleware_exports);

// src/services/ErrorService.ts
var ErrorResponse = class extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
};

// src/middlewares/errorMiddleware/ErrorMiddleware.ts
var ErrorMiddleware = class {
  constructor() {
    this.handleAsync = (fn) => (req, res, next) => {
      return Promise.resolve(fn(req, res, next)).catch((err) => next(err));
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handle(err, req, res, next) {
    if (err instanceof ErrorResponse)
      return res.status(err.code).json({ message: err.message });
    return res.status(500).json({ erro: "Internal Server Error" });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ErrorMiddleware
});
