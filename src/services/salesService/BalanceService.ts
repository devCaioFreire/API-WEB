/*import { createPrismaClientFromJWT } from "../../prisma";
import { ErrorResponse } from "../errorService/ErrorService";

interface ProductMovimentacion {
  pm_pedido_venda_id: number;
  pm_produto_id: number;
  pm_usuario_id: number | null;
  pm_quantidade: number | null;
  pm_tipo_movimentacao: string;
}
export interface ParamProps {
  field: string;
  value: any;
}

export interface ParamFilter {
  field: string;
  value: any;
}

export class BalanceService {
  async create(produtos: ProductMovimentacion[], token: string) {
    const prisma = createPrismaClientFromJWT(token);
    try{
      
      return prisma.$transaction(async()=>{
      const addProductMovimentacion = await prisma.produtos_movimentacoes.createMany({
        data:produtos
      });
      return addProductMovimentacion;
    })
  }
    catch(err){
      throw new ErrorResponse(500,'Erro ao criar Movimentação');
    }
  }
}*/

import { createPrismaClientFromJWT } from "../../prisma";
import { ErrorResponse } from "../errorService/ErrorService";

interface ProductMovimentacion {
  pm_pedido_venda_id: number;
  pm_produto_id: number;
  pm_usuario_id: number | null;
  pm_quantidade: number | null;
  pm_tipo_movimentacao: string;
}

export interface ParamFilter {
  field: string;
  value: any;
}

export class BalanceService {
  async create(
    produtos: ProductMovimentacion[],
    token: string,
    filter?: string
  ) {
    const prisma = createPrismaClientFromJWT(token);
    try {
      if (filter) {
        const lowerFilter = filter.toLowerCase();
        produtos.forEach((produto) => {
          if (produto.pm_quantidade !== null) {
            if (lowerFilter === 'input') {
              produto.pm_quantidade = Math.abs(produto.pm_quantidade);
            } else if (lowerFilter === 'output') {
              produto.pm_quantidade = -Math.abs(produto.pm_quantidade);
            }
          }
        });
      }

      return prisma.$transaction(async () => {
        const addProductMovimentacion = await prisma.produtos_movimentacoes.createMany({
          data: produtos,
        });
        return addProductMovimentacion;
      });
    } catch (err) {
      throw new ErrorResponse(500, 'Erro ao criar Movimentação');
    } finally {
      prisma.$disconnect();
    }
  }
}
