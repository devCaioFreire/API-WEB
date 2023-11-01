import { ProductMovimentacion } from '../models/balance.model';
import { createPrismaClientFromJWT } from '../prisma';
import { ErrorResponse } from './errorService/ErrorService';





export class BalanceService {
    async create(
        produtos: ProductMovimentacion[],
        token: string,
    ) {
        const prisma  = await createPrismaClientFromJWT(token);
        try {
            const addProductMovimentacion = await prisma.produtos_movimentacoes.createMany({
                data: produtos,
            });
            return addProductMovimentacion;

        } catch (err) {
            console.log(err);
            prisma.$disconnect();
            throw new ErrorResponse(400, 'Erro ao Criar Movimentação');
        } finally {
            prisma.$disconnect();
        }
    }
    async AjusteMovimentações( movimentacao: ProductMovimentacion,token: string,){
        const prisma  = await createPrismaClientFromJWT(token);
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