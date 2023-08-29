import { prismaMain } from "../../prisma";

interface ProductProps {
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