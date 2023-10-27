import { createPrismaClientFromJWT } from '../../prisma';

interface ProductProps {
  id: string;
  codProduto?: string;
  descricao?: string;
  vlrUnCom?: number;
  unCom?: string;
  saldo?: number;
  status?: string;
  codEAN?: string;
  ncm?: string;
  cfop?: string;
}

export class DeleteProductService {
    async execute({ id }: ProductProps, token: string) {

        token = token.slice(7);
        const prisma = await createPrismaClientFromJWT(token);

        const numericId = parseInt(id, undefined);
        const deleteProduct = await prisma.produtos.delete({
            where: { id: numericId }
        });
        prisma.$disconnect;
        return deleteProduct;
    }
}