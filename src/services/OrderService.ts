import { ProductMovimentacion } from '../models/balance.model';
import { IPedidoVenda} from '../models/order.model';
import {  ParamFilter, ParamProps } from '../models/utils.model';
import { createPrismaClientFromJWT } from '../prisma';
import { BalanceService } from './BalanceService';
import { ErrorResponse } from './errorService/ErrorService';
import { buildQuery, ParamPropsFormater } from './UtilService';

export class OrderService {
    async get(token: string, selectors?: ParamFilter[], params?: ParamProps[] ) {
        const prisma  = await createPrismaClientFromJWT(token);
        try {
            if(params){params = ParamPropsFormater(params);}
            const query = buildQuery(selectors,params);
            const pedidosVenda = await prisma.pedidos_venda.findMany({ where: query.where, skip: query.skip, take: query.take, orderBy: query.orderBy });
            return pedidosVenda;
        } catch (error) {
            throw new ErrorResponse(400, 'Bad Request nos pedidos venda');
        }
        finally{
            await prisma.$disconnect();
        }
    }
    async put(pedidoCancel:number, token:string){
        const prisma  = await createPrismaClientFromJWT(token);
        try {
            const pedido = await prisma.pedidos_venda.findUnique({where:{id:pedidoCancel}});
            if(!pedido){throw new ErrorResponse(404, 'Produto Não Encontrado');}
            pedido.status = 'C';
            const pedidoUpdated = await prisma.pedidos_venda.update({where:{id:pedido.id}, data:pedido});

            const itens = await prisma.pedidos_venda_itens.findMany({where:{pedido_id:pedidoUpdated.id}});
            const productMovimentacion: ProductMovimentacion[] = []; // Inicialize a matriz vazia
            const produtos = itens;
    
            if(produtos){
                for (const produto of produtos) {
                // Crie o objeto de movimentação para cada produto vendido
                    const productMov: ProductMovimentacion = {
                        pm_pedido_venda_id: pedidoUpdated.id,
                        pm_produto_id: produto.produto_id,
                        pm_usuario_id: pedidoUpdated.usuario_id!,
                        pm_quantidade: produto.quantidade!,
                        pm_tipo_movimentacao: 'Venda',
                        pm_numero_nota_fiscal: null,
                        pm_observacao: null
                    };
                    // Adicione o objeto à matriz productMovimentacion
                    productMovimentacion.push(productMov);
                }}
            const balanceService = new BalanceService();
            balanceService.create(productMovimentacion,token);

            return pedidoUpdated;
        } catch (error) {
            throw  Error;
        }
        finally{
            await prisma.$disconnect();
        }

    }
    async delete(pedidoUpdate:number, token:string){
        const prisma  = await createPrismaClientFromJWT(token);
        try {
            const pedido = await prisma.pedidos_venda.findUnique({where:{id:pedidoUpdate}});
            if(!pedido){throw new ErrorResponse(404, 'Produto Não Encontrado');}
            const pedidoDelete = await prisma.pedidos_venda.delete({where:{id:pedido.id}});

            const Itens = await prisma.pedidos_venda_itens.findMany({where:{pedido_id:pedidoDelete.id}});
            const itemIds = Itens.map((item) => item.id);

            const itemsDeleted = await prisma.pedidos_venda_itens.deleteMany({
                where: { id: { in: itemIds } },
            });
            const DeleteOrder = { ...pedidoDelete, itens: itemsDeleted };
            return DeleteOrder;
        } catch (error) {
            throw new ErrorResponse(400, 'Bad Request nos produtos');
        }
        finally{
            prisma.$disconnect();
        }
    }
    async create(pedido: IPedidoVenda, token: string) {
        const prisma  = await createPrismaClientFromJWT(token);
        try {
            const { itens, ...pedidoInfo } = pedido;
    
            // Crie o pedido de venda dentro da transação
            const createdPedido = await prisma.pedidos_venda.create({
                data:pedidoInfo,
            });
    
            let createdItens;
    
            // Se houver itens, crie os itens do pedido
            if (itens) {
                createdItens = await prisma.pedidos_venda_itens.createMany({
                    data: itens,
                });
            }
            
            console.log(createdItens);
            // Atualize o objeto do pedido criado com os itens
            const pedidoComItens = { ...createdPedido, itens: createdItens };

            const productMovimentacion: ProductMovimentacion[] = []; // Inicialize a matriz vazia
            const produtos = itens;
    
            if(produtos){
                for (const produto of produtos) {
                // Crie o objeto de movimentação para cada produto vendido
                    const productMov: ProductMovimentacion = {
                        pm_pedido_venda_id: pedidoComItens.id,
                        pm_produto_id: produto.produto_id,
                        pm_usuario_id: pedidoComItens.usuario_id!,
                        pm_quantidade: -produto.quantidade!,
                        pm_tipo_movimentacao: 'Venda',
                        pm_numero_nota_fiscal: null,
                        pm_observacao: null
                    };
                    // Adicione o objeto à matriz productMovimentacion
                    productMovimentacion.push(productMov);
                }}
            const balanceService = new BalanceService();
            balanceService.create(productMovimentacion,token);
            return pedidoComItens;

        } catch (error) {
            throw new ErrorResponse(400, 'Bad Request na criação do pedido');
        } finally {
            await prisma.$disconnect();
        }
    }
    
    async getNextOrderNumber(token: string) {
        const prisma  = await createPrismaClientFromJWT(token);
        const lastOrder = await prisma.pedidos_venda.findFirst({
            orderBy: {
                id: 'desc',
            },
        });
        prisma.$disconnect;
        if (lastOrder) {
            const ultimoNumeroPedido = lastOrder.id;
            const proximoNumeroPedido = ultimoNumeroPedido + 1;
            return proximoNumeroPedido;
        } else {
            // Se não houver pedidos na tabela, comece com o número 1
            return 1;
        }
        
    }

    async getOrderByListId(listId: number[], token:string){
        const prisma = await createPrismaClientFromJWT(token);
        try {
           
            const itens = await prisma.pedidos_venda_itens.findMany({where:{pedido_id:{in: listId}}});
            return itens;
        } catch (error) {
            throw new Error(error as string);
        }
        finally{
            await prisma.$disconnect();
        }
    }
}