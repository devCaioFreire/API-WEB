import { createPrismaClientFromJWT } from '../../prisma';
import { ErrorResponse } from '../errorService/ErrorService';
import { BalanceService } from './BalanceService';

interface DataItems {
    produto_id: number;
    ean: string;
    descricao: string;
    quantidade: number;
    valor_unitario: number;
    valor_total: number;
}

interface DataSaleRequest {
    vendedor_id: number,
    cpf_cnpj: string;
    status: string;
    valor_bruto: number;
    valor_liquido: number;
    forma_pagamento: string;
    desconto: number;
    troco: number;
    pagamento: number;
    itens: Array<DataItems>
}

interface ProductMovimentacion {
    pm_pedido_venda_id: number | null;
    pm_produto_id: number;
    pm_usuario_id: number;

    pm_quantidade: number;
    pm_tipo_movimentacao: string;
    pm_numero_nota_fiscal: number | null;
    pm_observacao: string | null;
}

export class DataSaleService {
    async create(
        {
            cpf_cnpj,
            valor_bruto,
            valor_liquido,
            forma_pagamento,
            desconto,
            troco,
            vendedor_id,
            pagamento,
            itens,
            status
        }: DataSaleRequest, authorization: string) {
        const prisma = createPrismaClientFromJWT(authorization);

        if (!vendedor_id) { throw new ErrorResponse(404, 'User Not Found'); }
        const dataSales = await prisma.pedidos_venda.create({
            data: {
                status,
                vendedor_id,
                valor_bruto,
                valor_liquido,
                forma_pagamento,
                desconto,
                pagamento,
                troco,
                cpf_cnpj: cpf_cnpj,
                itens: {
                    create: itens.map(item => ({
                        produto_id: item.produto_id,
                        ean: item.ean,
                        descricao: item.descricao,
                        quantidade: item.quantidade,
                        valor_unitario: item.valor_unitario,
                        valor_total: item.valor_total
                    }))
                },
            },
            include: {
                itens: true,
            }
        });
        const productMovimentacion: ProductMovimentacion[] = []; // Inicialize a matriz vazia
        const produtos = dataSales.itens;

        for (const produto of produtos) {
            // Crie o objeto de movimentação para cada produto vendido
            const productMov: ProductMovimentacion = {
                pm_pedido_venda_id: dataSales.id,
                pm_produto_id: produto.produto_id,
                pm_usuario_id: dataSales.vendedor_id!,
                pm_quantidade: -produto.quantidade!,
                pm_tipo_movimentacao: 'Venda',
                pm_numero_nota_fiscal: null,
                pm_observacao: null
            };
            // Adicione o objeto à matriz productMovimentacion
            productMovimentacion.push(productMov);
        }

        const balanceService = new BalanceService();
        await balanceService.create(productMovimentacion, authorization);

        prisma.$disconnect();
        return dataSales;
    }
}