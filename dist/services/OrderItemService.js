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

// src/services/OrderItemService.ts
var OrderItemService_exports = {};
__export(OrderItemService_exports, {
  OrderItemService: () => OrderItemService
});
module.exports = __toCommonJS(OrderItemService_exports);

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

// src/services/OrderItemService.ts
var OrderItemService = class {
  get(selectors, params, prisma) {
    return __async(this, null, function* () {
      try {
        if (params) {
          params = ParamPropsFormater(params);
        }
        const query = buildQuery(selectors, params);
        const pedidosVendaItens = yield prisma.pedidos_venda_itens.findMany({ where: query.where, skip: query.skip, take: query.take, orderBy: query.orderBy });
        return pedidosVendaItens;
      } catch (error) {
        console.log(error);
      } finally {
        yield prisma.$disconnect();
      }
    });
  }
  // async put(pedidoItemUpdate:IPedidoItem, token:string){
  //     const prisma  = createPrismaClientFromJWT(token);
  //     try {
  //         const pedido = await prisma.pedidos_venda_itens.findUnique({where:{id:pedidoItemUpdate.id}});
  //         if(!pedido){
  //             throw Error;
  //         }
  //         const updatedItem = await prisma.pedidos_venda_itens.update({where:{id:pedidoItemUpdate.id},data:{...pedidoItemUpdate}});
  //         return updatedItem;
  //     } catch (error) {
  //         throw  Error;
  //     }
  //     finally{
  //         prisma.$disconnect();
  //     }
  // }
  delete(ItensDelete, prisma) {
    return __async(this, null, function* () {
      try {
        const itemIds = ItensDelete.map((item) => item.id);
        const items = yield prisma.pedidos_venda_itens.findMany({
          where: { id: { in: itemIds } }
        });
        if (items.length != ItensDelete.length) {
          throw new ErrorResponse(404, "Itens N\xE3o Encontrados");
        }
        const itemsDeleted = yield prisma.pedidos_venda_itens.deleteMany({
          where: { id: { in: itemIds } }
        });
        return itemsDeleted;
      } catch (error) {
        console.log(error);
      } finally {
        yield prisma.$disconnect();
      }
    });
  }
  create(pedidoItems, prisma) {
    return __async(this, null, function* () {
      try {
        const createdPedidoItems = yield prisma.pedidos_venda_itens.createMany({
          data: pedidoItems
        });
        return createdPedidoItems;
      } catch (error) {
        console.log(error);
      } finally {
        yield prisma.$disconnect();
      }
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OrderItemService
});
