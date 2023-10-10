import { createPrismaClientFromJWT } from '../../prisma';

interface ProductProps {
  codProduto: string;
  descricao: string;
  vlrUnCom: string;
  unCom: string;
  saldo: number;
  status: string;
  codEAN: string;
  ncm: string;
  cfop: string;
}

export class AddProductService {
    async execute(
        {
            codProduto,
            descricao,
            vlrUnCom,
            status,
            unCom,
            codEAN,
            ncm,
            cfop
        }: ProductProps, token: string) {
        const prisma = createPrismaClientFromJWT(token);

        const addProduct = await prisma.produtos.create({
            data: {
                codProduto,
                descricao,
                vlrUnCom: parseFloat(vlrUnCom),
                saldo:0,
                status,
                unCom,
                codEAN,
                ncm,
                cfop
            }
        });
        prisma.$disconnect();
        return addProduct;
    }
}