import { prismaMain } from "../../../prisma";

export class GetIDProductsService {
  async execute(id: number) {
    try {
      const product = await prismaMain.produtos.findFirst({
        where: {
          id
        }
      });

      if (!product) {
        throw new Error('Produto não encontrado');
      }

      // Converter campos BigInt para strings
      const productWithBigIntToString = {
        ...product,
        id: product.id.toString(),
        id_sirius: product.id_sirius?.toString() || null,
      };

      return productWithBigIntToString;
    } catch (err) {
      throw new Error('Erro ao buscar produtos no banco de dados');
    }
  }
}