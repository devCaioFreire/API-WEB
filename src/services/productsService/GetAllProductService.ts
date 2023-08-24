import { prismaMain } from "../../prisma";

export class GetAllProductService {
  async execute() {
    try {
      const getAllProducts = await prismaMain.produtos.findMany();
      return getAllProducts;
    } catch (err) {
      console.error("Erro ao buscar produtos no banco de dados:", err);
      throw new Error('Erro ao buscar produtos no banco de dados');
    }
  }
}
