import { PrismaClient } from '@prisma/client';
import { IPedidoItem } from '../models/order.model';
import {  ParamFilter, ParamProps } from '../models/utils.model';
import { ErrorResponse } from './ErrorService';
import { buildQuery, ParamPropsFormater } from './UtilService';

export class OrderItemService {
    async get(selectors: ParamFilter[], params: ParamProps[], prisma:PrismaClient ) {
        try {
            if(params){params = ParamPropsFormater(params);}
            const query = buildQuery(selectors,params);
            const pedidosVendaItens = await prisma.pedidos_venda_itens.findMany({ where: query.where, skip: query.skip, take: query.take, orderBy: query.orderBy });
            return pedidosVendaItens;
        } catch (error) {
            console.log(error);
        }
    }
    async delete(ItensDelete: IPedidoItem[],prisma:PrismaClient) {
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
        }
    }
    
    async create(pedidoItems: IPedidoItem[], prisma:PrismaClient) {
        try {
            const createdPedidoItems = await prisma.pedidos_venda_itens.createMany({
                data: pedidoItems,
            });
            return createdPedidoItems;
        } catch (error) {
            console.log(error);
        }
    }
    
}