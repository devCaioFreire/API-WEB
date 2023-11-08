import { PrismaClient } from '@prisma/client';
import { ProductMovimentacion } from '../models/balance.model';
import { ErrorResponse } from './ErrorService';

export class BalanceService {
    async create(
        produtos: ProductMovimentacion[],
        prisma:PrismaClient
    ) { 

        try {
            const addProductMovimentacion = await prisma.produtos_movimentacoes.createMany({
                data: produtos,
            });
            return addProductMovimentacion;

        } catch (err) {
            console.log(err);
            throw new ErrorResponse(400, 'Erro ao Criar Movimentação');
        }
    }
    async AjusteMovimentações( movimentacao: ProductMovimentacion,prisma:PrismaClient){
        try {
            const produto = await prisma.produtos.findUnique({where:{id: movimentacao.pm_produto_id}});
            if (!produto){
                throw  new Error('Produto não encontrado');
            }
            movimentacao.pm_quantidade = -(produto.saldo - movimentacao.pm_quantidade); 
            const AjusteMovimentacao = await this.create([movimentacao],prisma);

            return AjusteMovimentacao;
        } catch (err) {
            throw new ErrorResponse(500, 'Erro ao criar Movimentação');
        }
    }
}