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

// src/services/BalanceService.ts
var BalanceService_exports = {};
__export(BalanceService_exports, {
  BalanceService: () => BalanceService
});
module.exports = __toCommonJS(BalanceService_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BalanceService
});
