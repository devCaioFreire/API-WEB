/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { GetPropsAndFilters, getAuthorization } from '../services/UtilService';
import { OrderService } from '../services/OrderService';
import { IPedidoVenda } from '../models/order.model';
import { OrderItemsService } from '../services/productsService/OrderItemsService';
export class OrderController{
    
    async getNextOrderNumberController(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const id = await Service.getNextOrderNumber(token); 
            return res.status(200).json({id});
        } catch (error) {
            console.log(error);
        }
    }
    async createOrder(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const pedido:IPedidoVenda = {...req.body};
            const Service = new OrderService();
            const pedidoCreated = await Service.create(pedido,token);

            return res.status(200).json(pedidoCreated);
        } catch (error) {
            console.log(error);
        }
    }
    async getOrder(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const  {ParamConfig,ParamFilter} = GetPropsAndFilters(req);
            const Service = new OrderService();
            const orders = await Service.get(token, ParamFilter, ParamConfig);
            return res.status(200).json(orders);
        } catch (error) {
            console.log(error);
        }
    }
    async CancelOrder(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const pedido = parseInt(req.body.id);
            const Service = new OrderService();
            const order = await Service.put(pedido,token);
            return res.status(200).json(order);
        } catch (error) {
            console.log(error);
        }
    }
    async getOrderRealized(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const Service = new OrderService();
            const orderRealizeded = await Service.get(token,[{field:'status',value:'R'}],[{field:'take',value:'10'},{field:'orderBy',value:'data_criacao'},{field:'OrderController',value:'desc'}]);
            return res.status(200).json(orderRealizeded);

        } catch (error) {
            console.log(error);
        }
    }
    async updateOrderStatus(req: Request, res: Response){
        try {
            const { id } = req.body;
            const token = getAuthorization(req.headers);
            const Service = new OrderService();
            const canceledOrder = await Service.put(id,token);
            return res.status(200).json(canceledOrder);

        } catch (error) {
            console.log(error);
        }
    }
    async getOrderByPaymentMethod(req: Request, res: Response){
        try {
            const {method} = req.body;
            const token = getAuthorization(req.headers);

            const Service = new OrderService();
            const pedido = await Service.get(token,[{field:'forma_pagamento', value:method}],[{field:'take',value:'10000'}]);
            const listId:number[] = [];
            for (let i = 0; i < pedido.length; i++) {
                listId.push(pedido[i].id!);
            }
            const PedidoResponse: any[] =[];
            if(listId.length > 0){
                const itens = await Service.getOrderByListId(listId,token);

                for (let i = 0; i < pedido.length; i++) {
                    PedidoResponse.push(pedido);
                    PedidoResponse[i].itens = itens.filter((item)=>item.pedido_id === pedido[i].id);   
                }
            }
            return res.status(200).json(PedidoResponse);
        } catch (error) {
            throw new Error(error as string);
        }
    }
    async getOrderById(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const  {ParamConfig,ParamFilter} = GetPropsAndFilters(req);
            const Service = new OrderService();
            const pedido = await Service.get(token,ParamFilter,[{field:'take',value:'1'}]);

            const ItemService = new OrderItemsService();
            const itens = await ItemService.get(token,[{field:'pedido_id', value:pedido[0].id}],[{field:'take',value:'10000'}]);
            
            return res.status(200).json(itens);
        } catch (error) {
            throw new Error(error as string);
        }
    }



}