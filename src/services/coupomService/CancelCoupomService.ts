import { prisma } from "../../prisma";

interface CancelCoupomRequest {
  id: number;
  cpf_cnpj: string;
  valor_liquido: number;
  data_criacao: Date;
}

export class CancelCoupomService {
  async execute(
    {
      id,
      cpf_cnpj,
      valor_liquido,
      data_criacao
    }: CancelCoupomRequest) {
    const cancelCoupom = await prisma.pedidos_venda.findMany({
      take: 10,
      orderBy: { data_criacao: "desc" },
    })

    return cancelCoupom;
  }
}