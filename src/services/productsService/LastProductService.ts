import { await createPrismaClientFromJWT } from '../../prisma';
import { ErrorResponse } from '../errorService/ErrorService';

export async function getLastProductService(token: string) {
    const prisma = await createPrismaClientFromJWT(token);
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
        throw new ErrorResponse(400,'Erro ao Pegar o ultima Produto');
    }
}
