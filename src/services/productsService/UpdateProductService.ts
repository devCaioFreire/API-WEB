import { await createPrismaClientFromJWT } from '../../prisma';

interface ProductProps {
  id: number;
  codProduto: string;
  descricao: string;
  vlrUnCom: number;
  unCom: string;
  saldo: number;
  status: string;
  codEAN: string;
  ncm: string;
  cfop: string;
}

export class UpdateProductService {
    async execute(
        {
            id,
            codProduto,
            descricao,
            vlrUnCom,
            saldo,
            status,
            unCom,
            codEAN,
            ncm,
            cfop
        }: ProductProps, token: string) {

        token = token.slice(7);
        const prisma = await createPrismaClientFromJWT(token);

        const updateProduct = await prisma.produtos.updateMany({
            where: {
                id
            },
            data: {
                codProduto,
                descricao,
                vlrUnCom,
                saldo,
                status,
                unCom,
                codEAN,
                ncm,
                cfop
            }
        });

        prisma.$disconnect();
        return updateProduct;
    }
}