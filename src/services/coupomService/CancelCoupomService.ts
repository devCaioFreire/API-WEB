import { prismaMain } from "../../prisma";

interface CancelCoupomRequest {
  id: number;
  cpf_cnpj: string;
  valor_liquido: number;
  data_criacao: Date;
}

export class CancelCoupomService {
  async execute({ }: CancelCoupomRequest) {
    const cancelCoupom = await prismaMain.pedidos_venda.findMany({
      where: {
        status: "R",
      },
      take: 10,
      orderBy: { data_criacao: "desc" },
    })

    return cancelCoupom;
  }
}