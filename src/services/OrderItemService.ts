import { IPedidoItem } from '../models/order.model';
import {  ParamFilter, ParamProps } from '../models/utils.model';
import { createPrismaClientFromJWT } from '../prisma';
import { ErrorResponse } from './ErrorService';
import { buildQuery, ParamPropsFormater } from './UtilService';

export class OrderItemService {
    async get(token: string, selectors?: ParamFilter[], params?: ParamProps[] ) {
        const prisma  = await createPrismaClientFromJWT(token);
        try {
            if(params){params = ParamPropsFormater(params);}
            const query = buildQuery(selectors,params);
            const pedidosVendaItens = await prisma.pedidos_venda_itens.findMany({ where: query.where, skip: query.skip, take: query.take, orderBy: query.orderBy });
            return pedidosVendaItens;
        } catch (error) {
            console.log(error);
        }
        finally{
            await prisma.$disconnect();
        }
    }
    // async put(pedidoItemUpdate:IPedidoItem, token:string){
    //     const prisma  = createPrismaClientFromJWT(token);
    //     try {
    //         const pedido = await prisma.pedidos_venda_itens.findUnique({where:{id:pedidoItemUpdate.id}});
    //         if(!pedido){
    //             throw Error;
    //         }
    //         const updatedItem = await prisma.pedidos_venda_itens.update({where:{id:pedidoItemUpdate.id},data:{...pedidoItemUpdate}});
    //         return updatedItem;
    //     } catch (error) {
    //         throw  Error;
    //     }
    //     finally{
    //         prisma.$disconnect();
    //     }

    // }
    async delete(ItensDelete: IPedidoItem[], token: string) {
        const prisma  = await createPrismaClientFromJWT(token);
        try {
            const itemIds = ItensDelete.map((item) => item.id);
    
            const items = await prisma.pedidos_venda_itens.findMany({
                where: { id: { in: itemIds } },
            });
    
            if (items.length != ItensDelete.length) {
                throw new ErrorResponse(404, 'Itens Não Encontrados');
            }
    
            const itemsDeleted = await prisma.pedidos_venda_itens.deleteMany({
                where: { id: { in: itemIds } },
            });
    
            return itemsDeleted;
        } catch (error) {
            console.log(error);
        } finally {
            await prisma.$disconnect();
        }
    }
    
    async create(pedidoItems: IPedidoItem[], token: string) {
        const prisma  = await createPrismaClientFromJWT(token);
        try {
            const createdPedidoItems = await prisma.pedidos_venda_itens.createMany({
                data: pedidoItems,
            });
            return createdPedidoItems;
        } catch (error) {
            console.log(error);
        } finally {
            await prisma.$disconnect();
        }
    }
    
}