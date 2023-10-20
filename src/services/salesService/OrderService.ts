import { await createPrismaClientFromJWT } from '../../prisma';

export async function getNextOrderNumber(token: string) {
    const prisma = await createPrismaClientFromJWT(token);
    const lastOrder = await prisma.pedidos_venda.findFirst({
        orderBy: {
            id: 'desc',
        },
    });
    prisma.$disconnect;
    if (lastOrder) {
        const ultimoNumeroPedido = lastOrder.id;
        const proximoNumeroPedido = ultimoNumeroPedido + 1;
        return proximoNumeroPedido;
    } else {
        // Se não houver pedidos na tabela, comece com o número 1
        return 1;
    }
    
}
