import { prismaMain } from "../../prisma";

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
    }: ProductProps) {
    const updateProduct = await prismaMain.produtos.updateMany({
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
    return updateProduct;
  }
}