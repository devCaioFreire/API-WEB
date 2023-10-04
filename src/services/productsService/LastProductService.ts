import { createPrismaClientFromJWT } from "../../prisma";

export async function getLastProductService(token: string) {
  const prisma = createPrismaClientFromJWT(token);
  try {
    const lastProduct = await prisma.produtos.findFirst({
      orderBy: {
        id: 'desc',
      },
    });
    prisma.$disconnect();

    if (lastProduct) {
      const lastProductID = Number(lastProduct.id);
      const nextProductID = lastProductID + 1;
      return nextProductID;
    } else {
      // Se não houver pedidos na tabela, comece com o número 1
      return 1;
    }
  } catch (error) {
    console.error('Erro ao obter o próximo número de pedido:', error);
    throw error;
  }
}
