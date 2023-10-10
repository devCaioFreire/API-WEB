import { createPrismaClientFromJWT } from "../../../prisma";

export class GetDescriptionProductsService {
  async execute(descricao: string, page: number, authorization: string) {
    const prisma = createPrismaClientFromJWT(authorization);
    try {
      const products = await prisma.produtos.findMany({
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
          codEAN: true,
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
