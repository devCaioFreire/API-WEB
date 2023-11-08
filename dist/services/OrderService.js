"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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

// src/services/OrderService.ts
var OrderService_exports = {};
__export(OrderService_exports, {
  OrderService: () => OrderService
});
module.exports = __toCommonJS(OrderService_exports);

// src/services/ErrorService.ts
var ErrorResponse = class extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
};

// src/services/BalanceService.ts
var BalanceService = class {
  create(produtos, prisma) {
    return __async(this, null, function* () {
      try {
        const addProductMovimentacion = yield prisma.produtos_movimentacoes.createMany({
          data: produtos
        });
        return addProductMovimentacion;
      } catch (err) {
        console.log(err);
        throw new ErrorResponse(400, "Erro ao Criar Movimenta\xE7\xE3o");
      } finally {
        yield prisma.$disconnect();
      }
    });
  }
  AjusteMovimenta\u00E7\u00F5es(movimentacao, prisma) {
    return __async(this, null, function* () {
      try {
        const produto = yield prisma.produtos.findUnique({ where: { id: movimentacao.pm_produto_id } });
        if (!produto) {
          throw new Error("Produto n\xE3o encontrado");
        }
        movimentacao.pm_quantidade = -(produto.saldo - movimentacao.pm_quantidade);
        const AjusteMovimentacao = yield this.create([movimentacao], prisma);
        return AjusteMovimentacao;
      } catch (err) {
        throw new ErrorResponse(500, "Erro ao criar Movimenta\xE7\xE3o");
      } finally {
        yield prisma.$disconnect();
      }
    });
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

// src/services/OrderService.ts
var OrderService = class {
  get(selectors, params, prisma) {
    return __async(this, null, function* () {
      try {
        if (params) {
          params = ParamPropsFormater(params);
        }
        const query = buildQuery(selectors, params);
        const pedidosVenda = yield prisma.pedidos_venda.findMany({ where: query.where, skip: query.skip, take: query.take, orderBy: query.orderBy });
        return pedidosVenda;
      } catch (error) {
        console.log(error);
        throw Error.call(error);
      } finally {
        yield prisma.$disconnect();
      }
    });
  }
  getById(id, prisma) {
    return __async(this, null, function* () {
      try {
        return yield prisma.pedidos_venda.findMany({ where: { id } });
      } catch (error) {
        console.log(error);
        throw Error.call(error);
      } finally {
        yield prisma.$disconnect();
      }
    });
  }
  put(pedidoCancel, prisma) {
    return __async(this, null, function* () {
      try {
        const pedido = yield prisma.pedidos_venda.findUnique({ where: { id: pedidoCancel } });
        if (!pedido) {
          throw new ErrorResponse(404, "Produto N\xE3o Encontrado");
        }
        pedido.status = "C";
        const pedidoUpdated = yield prisma.pedidos_venda.update({ where: { id: pedido.id }, data: pedido });
        const itens = yield prisma.pedidos_venda_itens.findMany({ where: { pedido_id: pedidoUpdated.id } });
        const productMovimentacion = [];
        const produtos = itens;
        if (produtos) {
          for (const produto of produtos) {
            const productMov = {
              pm_pedido_venda_id: pedidoUpdated.id,
              pm_produto_id: produto.produto_id,
              pm_usuario_id: pedidoUpdated.usuario_id,
              pm_quantidade: produto.quantidade,
              pm_tipo_movimentacao: "Cancelamento de Pedido",
              pm_numero_nota_fiscal: null,
              pm_observacao: null
            };
            productMovimentacion.push(productMov);
          }
        }
        const balanceService = new BalanceService();
        balanceService.create(productMovimentacion, prisma);
        return pedidoUpdated;
      } catch (error) {
        throw Error;
      } finally {
        yield prisma.$disconnect();
      }
    });
  }
  delete(pedidoUpdate, prisma) {
    return __async(this, null, function* () {
      try {
        const pedido = yield prisma.pedidos_venda.findUnique({ where: { id: pedidoUpdate } });
        if (!pedido) {
          throw new ErrorResponse(404, "Produto N\xE3o Encontrado");
        }
        const pedidoDelete = yield prisma.pedidos_venda.delete({ where: { id: pedido.id } });
        const Itens = yield prisma.pedidos_venda_itens.findMany({ where: { pedido_id: pedidoDelete.id } });
        const itemIds = Itens.map((item) => item.id);
        const itemsDeleted = yield prisma.pedidos_venda_itens.deleteMany({
          where: { id: { in: itemIds } }
        });
        const DeleteOrder = __spreadProps(__spreadValues({}, pedidoDelete), { itens: itemsDeleted });
        return DeleteOrder;
      } catch (error) {
        throw new ErrorResponse(400, "Bad Request nos produtos");
      } finally {
        prisma.$disconnect();
      }
    });
  }
  create(pedido, prisma) {
    return __async(this, null, function* () {
      try {
        const createdPedido = yield prisma.pedidos_venda.create({
          data: pedido
        });
        return createdPedido;
      } catch (error) {
        console.log(error);
        throw new ErrorResponse(400, "Bad Request na cria\xE7\xE3o do pedido");
      } finally {
        yield prisma.$disconnect();
      }
    });
  }
  getNextOrderNumber(prisma) {
    return __async(this, null, function* () {
      const lastOrder = yield prisma.pedidos_venda.findFirst({
        orderBy: {
          id: "desc"
        }
      });
      prisma.$disconnect;
      if (lastOrder) {
        const ultimoNumeroPedido = lastOrder.id;
        const proximoNumeroPedido = ultimoNumeroPedido + 1;
        return proximoNumeroPedido;
      } else {
        return 1;
      }
    });
  }
  getOrderByListId(listId, prisma) {
    return __async(this, null, function* () {
      try {
        const itens = yield prisma.pedidos_venda_itens.findMany({ where: { pedido_id: { in: listId } } });
        return itens;
      } catch (error) {
        throw new Error(error);
      } finally {
        yield prisma.$disconnect();
      }
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OrderService
});
