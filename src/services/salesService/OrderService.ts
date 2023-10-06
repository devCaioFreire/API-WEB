import { prismaMain } from "../../prisma";

export async function getNextOrderNumber() {
  try {
    const lastOrder = await prismaMain.pedidos_venda.findFirst({
      orderBy: {
        id: 'desc',
      },
    });

    if (lastOrder) {
      const ultimoNumeroPedido = lastOrder.id;
      const proximoNumeroPedido = ultimoNumeroPedido + 1;
      return proximoNumeroPedido;
    } else {
      // Se não houver pedidos na tabela, comece com o número 1
      return 1;
    }
  } catch (error) {
    console.error('Erro ao obter o próximo número de pedido:', error);
    throw error;
  }
}
