import { prismaMain } from "../../../prisma";

export class GetDescriptionProductsService {
  async execute(descricao: string, page: number) {
    try {
      const products = await prismaMain.produtos.findMany({
        where: {
          descricao: {
            contains: descricao,
          }
        },
        orderBy: {
          id: 'asc'
        },
        skip: (page - 1) * 20,
        take: 20,
        select: {
          id: true,
          descricao: true,
          saldo: true,
          vlrUnCom: true
        }
      });

      return products;

    } catch (err) {
      throw new Error('Erro ao buscar produtos no banco de dados');
    }
  }
}
