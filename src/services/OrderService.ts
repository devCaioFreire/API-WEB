import { PrismaClient } from '@prisma/client';
import { IPedidoItem, IPedidoVenda} from '../models/order.model';
import {  ParamFilter, ParamProps } from '../models/utils.model';
import { ErrorResponse } from './ErrorService';
import { buildQuery, ParamPropsFormater } from './UtilService';
import { createPrismaClientFromJWT } from '../prisma';

export class OrderService {
    async get(selectors: ParamFilter[], params: ParamProps[],prisma:PrismaClient) {
        try {
            if(params){params = ParamPropsFormater(params);}
            const query = buildQuery(selectors,params);
            const pedidosVenda = await prisma.pedidos_venda.findMany({ where: query.where, skip: query.skip, take: query.take, orderBy: query.orderBy });
            return pedidosVenda;
        } catch (error) {
            console.log(error);
            throw Error.call(error);
        }
    }
    async getById(id:number|string, prisma:PrismaClient){
        try {
            return await prisma.pedidos_venda.findMany({where:{id:id}});
        } catch (error) {
            console.log(error);
            throw Error.call(error);
        }
    }
    async put(pedidoCancel:number,prisma:PrismaClient){
        try {
            const pedido = await prisma.pedidos_venda.findUnique({where:{id:pedidoCancel}});
            if(!pedido){throw new ErrorResponse(404, 'Produto Não Encontrado');}
            pedido.status = 'C';
            const pedidoUpdated = await prisma.pedidos_venda.update({where:{id:pedido.id}, data:pedido});

            return pedidoUpdated;
        } catch (error) {
            throw  Error;
        }
    }
    async delete(pedidoUpdate:number,prisma:PrismaClient){
        try {
            const pedido = await prisma.pedidos_venda.findUnique({where:{id:pedidoUpdate}});
            if(!pedido){throw new ErrorResponse(404, 'Produto Não Encontrado');}
            const pedidoDelete = await prisma.pedidos_venda.delete({where:{id:pedido.id}});

            const Itens = await prisma.pedidos_venda_itens.findMany({where:{pedido_id:pedidoDelete.id}});
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const itemIds = Itens.map((item:any) => item.id);

            const itemsDeleted = await prisma.pedidos_venda_itens.deleteMany({
                where: { id: { in: itemIds } },
            });
            const DeleteOrder = { ...pedidoDelete, itens: itemsDeleted };
            return DeleteOrder;
        } catch (error) {
            throw new ErrorResponse(400, 'Bad Request nos produtos');
        }
    }
    async create(pedido: IPedidoVenda,prisma:PrismaClient) {
        try {
            const createdPedido = await prisma.pedidos_venda.create({
                data:pedido,
            });
            return createdPedido;
        } catch (error) {
            console.log(error);
            throw new ErrorResponse(400, 'Bad Request na criação do pedido');
        } 
    }
    
    async getNextOrderNumber(token:string) {
        const prisma = await createPrismaClientFromJWT(token);
        try {
            const lastOrder = await prisma.pedidos_venda.findFirst({
                orderBy: {
                    id: 'desc',
                },
            });
            await prisma.$disconnect;
            if (lastOrder) {
                const ultimoNumeroPedido = lastOrder.id;
                const proximoNumeroPedido = ultimoNumeroPedido + 1;
                return proximoNumeroPedido;
            } else {
                // Se não houver pedidos na tabela, comece com o número 1
                return 1;
            }
        } catch (error) {
            console.log(error);
            throw new ErrorResponse(500, 'Erro ao procurar id');
        }finally{
            await prisma.$disconnect();
        }
        
        
    }

    async getOrderByListId(listId: number[],prisma:PrismaClient){
        try {
            const itens: IPedidoItem[] = await prisma.pedidos_venda_itens.findMany({where:{pedido_id:{in: listId}}});
            return itens;
        } catch (error) {
            throw new Error(error as string);
        }
    }
}