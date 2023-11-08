"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/services/UtilService.ts
var UtilService_exports = {};
__export(UtilService_exports, {
  GetPropsAndFilters: () => GetPropsAndFilters,
  ParamPropsFormater: () => ParamPropsFormater,
  Utils_service: () => Utils_service,
  buildQuery: () => buildQuery,
  convertBigIntToString: () => convertBigIntToString,
  decodeToken: () => decodeToken,
  getAuthorization: () => getAuthorization
});
module.exports = __toCommonJS(UtilService_exports);
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var Utils_service = class {
  decodeToken(token) {
    const decoded = import_jsonwebtoken.default.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded.id_company) {
      throw new Error("Invalid JWT");
    }
    return decoded;
  }
};
function ParamPropsFormater(Params) {
  for (const param of Params) {
    if (param.value === "" || param.value === void 0 || param.value === null) {
      continue;
    }
    switch (param.field) {
      case "saldo":
        if (param.value === 0 || param.value === "0") {
          param.value = { lte: param.value };
          break;
        }
        param.value = { gte: param.value };
        break;
      case "descricao":
        param.value = { contains: param.value };
        break;
    }
  }
  return Params;
}
function decodeToken(token) {
  const decoded = import_jsonwebtoken.default.verify(token, process.env.JWT_SECRET);
  if (!decoded || !decoded.id_company) {
    throw new Error("Invalid JWT");
  }
  return decoded;
}
function GetPropsAndFilters(Req) {
  let ParamConfig = [];
  const ParamFilter = [];
  Object.entries(Req.query).map(([field, value]) => ParamConfig.push({ field, value }));
  const filters = ParamConfig.filter((element) => element.field == "filter");
  ParamConfig = ParamConfig.filter((element) => element.field !== "filter");
  if (filters != void 0 && filters != null) {
    for (const filter of filters) {
      const json = JSON.parse(filter.value);
      json.forEach((element) => {
        ParamFilter.push({ field: element.field, value: element.value });
      });
    }
  }
  return { ParamConfig, ParamFilter };
}
function buildQuery(selectors, params) {
  var _a, _b;
  const query = { orderBy: { id: "asc" }, skip: 0, take: 20, where: {} };
  if (selectors && selectors.length > 0) {
    query.where = {};
    for (const filter of selectors) {
      if (filter.value === "" || filter.value === void 0 || filter.value === null)
        continue;
      const { field, value } = filter;
      query.where[field] = field === "id" ? parseInt(value) : value;
    }
  }
  if (params && params.length > 0) {
    for (const param of params) {
      switch (param.field) {
        case "take":
          query.take = parseInt(param.value);
          break;
        case "page":
          query.skip = param.value;
          break;
        case "orderBy":
          query.orderBy = { [param.value]: "asc" };
          break;
        case "order":
          const campo = Object.getOwnPropertyNames(query.orderBy)[0];
          query.orderBy = { [campo]: param.value };
          break;
      }
    }
    query.skip = ((_a = query.skip) != null ? _a : 0) * ((_b = query.take) != null ? _b : 0);
  }
  return query;
}
function getAuthorization(ReqHeader) {
  try {
    let { authorization } = ReqHeader;
    if (!authorization)
      throw new Error("Token Invalid Or Not Found");
    authorization = authorization.split(" ")[1];
    return authorization;
  } catch (error) {
    console.log(error);
  }
}
function convertBigIntToString(obj) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === "bigint") {
        obj[key] = obj[key].toString();
      }
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GetPropsAndFilters,
  ParamPropsFormater,
  Utils_service,
  buildQuery,
  convertBigIntToString,
  decodeToken,
  getAuthorization
});
