import { prismaMain } from "../../prisma";

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
  async execute({ id }: ProductProps) {
    const numericId = parseInt(id, undefined); 
    const deleteProduct = await prismaMain.produtos.delete({
      where: { id: numericId }
    });
    return deleteProduct;
  }
}