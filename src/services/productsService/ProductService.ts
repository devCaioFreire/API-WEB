import { prismaMain } from "../../prisma";

export class ProductService {
  async execute(ean: string) {
    try {
      const products = await prismaMain.produtos.findFirst({
        where: { codEAN: ean }
      });
      return products;
    } catch (err) {
      throw new Error('Erro ao buscar produtos no banco de dados');
    }
  }
}