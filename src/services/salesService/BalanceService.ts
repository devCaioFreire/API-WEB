import { createPrismaClientFromJWT } from '../../prisma';
import { ErrorResponse } from '../errorService/ErrorService';

interface ProductMovimentacion {
  pm_pedido_venda_id: number | null;
  pm_produto_id: number;
  pm_usuario_id: number;
  pm_quantidade: number;
  pm_tipo_movimentacao: string;
  pm_numero_nota_fiscal: number | null;
  pm_observacao: string | null;
}

export interface ParamFilter {
  field: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}

export class BalanceService {
    async create(
        produtos: ProductMovimentacion[],
        token: string,
    ) {
        const prisma = createPrismaClientFromJWT(token);
        try {
            const addProductMovimentacion = await prisma.produtos_movimentacoes.createMany({
                data: produtos,
            });
            return addProductMovimentacion;

        } catch (err) {
            prisma.$disconnect();
            throw new ErrorResponse(400, 'Erro ao Criar Movimentação');
        } finally {
            prisma.$disconnect();
        }
    }
    async AjusteMovimentações( movimentacao: ProductMovimentacion,token: string,){
        const prisma = createPrismaClientFromJWT(token);
        try {
            const produto = await prisma.produtos.findUnique({where:{id: movimentacao.pm_produto_id}});
            if (!produto){
                throw  new Error('Produto não encontrado');
            }
            movimentacao.pm_quantidade = -(produto.saldo - movimentacao.pm_quantidade); 
            const AjusteMovimentacao = await this.create([movimentacao],token);

            return AjusteMovimentacao;
        } catch (err) {
            prisma.$disconnect();
            throw new ErrorResponse(500, 'Erro ao criar Movimentação');
        } finally {
            prisma.$disconnect();
        }
    }
}