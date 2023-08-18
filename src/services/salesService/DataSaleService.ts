import { prisma } from "../../prisma";
import { atualizarSaldo, criarMovimentacao } from "./BalanceControl";

interface DataItems {
  produto_id: number;
  ean: string;
  descricao: string;
  quantidade: number;
  valor_unitario: number;
  valor_total: number;
};

interface DataSaleRequest {
  cpf_cnpj: string;
  status: string;
  valor_bruto: number;
  valor_liquido: number;
  forma_pagamento: string;
  desconto: number;
  troco: number;
  vendedor_id: number;
  pagamento: number;
  itens: Array<DataItems>
}

export class DataSaleService {
  async execute(
    {
      cpf_cnpj,
      valor_bruto,
      valor_liquido,
      forma_pagamento,
      desconto,
      troco,
      vendedor_id,
      pagamento,
      itens,
      status
    }: DataSaleRequest) {
    const dataSales = await prisma.pedidos_venda.create({
      data: {
        status,
        vendedor_id,
        valor_bruto,
        valor_liquido,
        forma_pagamento,
        desconto,
        pagamento,
        troco,
        cpf_cnpj: cpf_cnpj,
        itens: {
          create: itens.map(item => ({
            produto_id: item.produto_id,
            ean: item.ean,
            descricao: item.descricao,
            quantidade: item.quantidade,
            valor_unitario: item.valor_unitario,
            valor_total: item.valor_total
          }))
        },
      },
      include: {
        itens: true,
      }
    })

    for (const item of itens) {
      const { produto_id, quantidade } = item;

      await criarMovimentacao(dataSales.id, produto_id, quantidade);
      await atualizarSaldo(produto_id, quantidade);
    }

    return dataSales;
  }
}