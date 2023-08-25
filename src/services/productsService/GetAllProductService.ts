import { prismaMain } from "../../prisma";

export class AllProductsService {
  async execute() {
    try {
      const products = await prismaMain.produtos.findMany();
      // Converter campos BigInt para strings
      const productsWithBigIntToString = products.map(product => ({
        ...product,
        id: product.id.toString(),
        id_sirius: product.id_sirius?.toString() || null,
      }));
      return productsWithBigIntToString;
    } catch (err) {
      throw new Error('Erro ao buscar produtos no banco de dados');
    }
  }
}