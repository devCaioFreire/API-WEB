import { createPrismaClientFromJWT } from '../../../prisma';
import { ErrorResponse } from '../../errorService/ErrorService';

export class GetEANProductsService {
    async execute(ean: string, authorization: string) {
        const prisma = await createPrismaClientFromJWT(authorization);
        try {
            const codEAN = ean;
            const product = await prisma.produtos.findFirst({
                where: { codEAN }
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
            throw new ErrorResponse(400,'Erro ao buscar produtos no banco de dados');
        }
        finally{
            prisma.$disconnect;
        }
    }
}