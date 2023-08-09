import { prisma } from "../../prisma";

interface DataItems {
  produto_id: number;
  ean: string;
  descricao: string;
  quantidade: number;
  valor_unitario: number;
  valor_total: number;
};

interface DataSaleRequest {
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
      valor_bruto,
      valor_liquido,
      forma_pagamento,
      desconto,
      troco,
      vendedor_id,
      pagamento,
      itens
    }: DataSaleRequest) {
    const dataSales = await prisma.pedidos_venda.create({
      data: {
        vendedor_id,
        valor_bruto,
        valor_liquido,
        forma_pagamento,
        desconto,
        pagamento,
        troco,
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
      },
    });

    return dataSales;
  }
}