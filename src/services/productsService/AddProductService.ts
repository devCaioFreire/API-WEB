import { createPrismaClientFromJWT } from "../../prisma";

interface ProductProps {
  codProduto: string;
  descricao: string;
  vlrUnCom: number;
  unCom: string;
  saldo: number | string;
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
      saldo,
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
        vlrUnCom,
        saldo,
        status,
        unCom,
        codEAN,
        ncm,
        cfop
      }
    });
    return addProduct;
  }
}