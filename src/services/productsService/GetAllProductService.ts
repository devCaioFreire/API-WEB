import { createPrismaClientFromJWT } from '../../prisma';
import { ErrorResponse } from '../errorService/ErrorService';

export class AllProductsService {
    async execute(offset = 0, limit = 20, token: string) {

        token = token.slice(7);
        const prisma  = createPrismaClientFromJWT(token);

        try {
            const products = await prisma.produtos.findMany({
                skip: offset,
                take: limit,
            });

            // Converter campos BigInt para strings
            const productsWithBigIntToString = products.map(product => ({
                ...product,
                id: product.id.toString(),
                id_sirius: product.id_sirius?.toString() || null,
            }));

            return productsWithBigIntToString;
        } catch (err) {
            throw new ErrorResponse(404,'Erro ao buscar produtos no banco de dados');
        }
        finally{
            prisma.$disconnect;
        }
    }
}