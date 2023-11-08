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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/services/ProductService.ts
var ProductService_exports = {};
__export(ProductService_exports, {
  ProductService: () => ProductService
});
module.exports = __toCommonJS(ProductService_exports);

// src/services/ErrorService.ts
var ErrorResponse = class extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
};

// src/services/UtilService.ts
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
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

// src/services/ProductService.ts
var ProductService = class {
  get(filtro, params, prisma) {
    return __async(this, null, function* () {
      try {
        if (filtro) {
          filtro = ParamPropsFormater(filtro);
        }
        const query = buildQuery(filtro, params);
        const produtos = yield prisma.produtos.findMany({ where: query.where, skip: query.skip, take: query.take, orderBy: query.orderBy });
        return produtos;
      } catch (error) {
        throw new ErrorResponse(400, "Bad Request nos produtos");
      } finally {
        yield prisma.$disconnect();
      }
    });
  }
  put(product, prisma) {
    return __async(this, null, function* () {
      try {
        const existingProduct = yield prisma.produtos.findUnique({
          where: { id: product.id }
        });
        if (!existingProduct) {
          throw new Error("Produto n\xE3o encontrado");
        }
        const updatedProduct = yield prisma.produtos.update({
          where: { id: product.id },
          data: {
            codProduto: product.codProduto,
            descricao: product.descricao,
            vlrUnCom: parseFloat(product.vlrUnCom.toString()),
            saldo: parseFloat(product.saldo.toString()),
            status: product.status,
            unCom: product.unCom,
            codEAN: product.codEAN,
            ncm: product.ncm,
            cfop: product.cfop
          }
        });
        return updatedProduct;
      } finally {
        yield prisma.$disconnect();
      }
    });
  }
  delete(productId, prisma) {
    return __async(this, null, function* () {
      try {
        const product = yield prisma.produtos.findUnique({ where: { id: productId } });
        if (!product) {
          throw new ErrorResponse(404, "Produto N\xE3o Encontrado");
        }
        const productDeleted = yield prisma.produtos.delete({ where: { id: product.id } });
        return productDeleted;
      } catch (error) {
        throw new ErrorResponse(400, "Bad Request nos produtos");
      } finally {
        yield prisma.$disconnect();
      }
    });
  }
  create(produto, prisma) {
    return __async(this, null, function* () {
      try {
        return yield prisma.$transaction((prisma2) => __async(this, null, function* () {
          let createdProduct;
          if ((yield prisma2.produtos.findMany({ where: { codEAN: produto.codEAN } })).length > 0) {
            throw new Error("Codigo EAN J\xE1 Cadastrado");
          } else {
            createdProduct = yield prisma2.produtos.create({ data: {
              codProduto: produto.codProduto,
              descricao: produto.descricao,
              vlrUnCom: parseFloat(produto.vlrUnCom.toString()),
              saldo: parseFloat(produto.saldo.toString()),
              status: produto.status,
              unCom: produto.unCom,
              codEAN: produto.codEAN,
              ncm: produto.ncm,
              cfop: produto.cfop
            } });
          }
          return createdProduct;
        }));
      } catch (error) {
        throw new ErrorResponse(400, "Erro ao tentar deletar");
      } finally {
        yield prisma.$disconnect();
      }
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ProductService
});
