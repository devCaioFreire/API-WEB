/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { GetPropsAndFilters, getAuthorization } from '../services/UtilService';
import { OrderService } from '../services/OrderService';
import { IPedidoVenda } from '../models/order.model';
export class OrderController{
    private Service = new OrderService();
    async getNextOrderNumberController(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const id = await this.Service.getNextOrderNumber(token); 
            return res.status(200).json({id});
        } catch (error) {
            throw new Error;
        }
    }
    async createOrder(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const pedido:IPedidoVenda = {...req.body};
            const pedidoCreated = await this.Service.create(pedido,token);

            return res.status(200).json(pedidoCreated);
        } catch (error) {
            throw new Error;
        }
    }
    async getOrder(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const  {ParamConfig,ParamFilter} = GetPropsAndFilters(req);
            const orders = await this.Service.get(token, ParamFilter, ParamConfig);
            return res.status(200).json(orders);
        } catch (error) {
            throw new Error;
        }
    }
    async CancelOrder(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const pedido = parseInt(req.body.id);
            const order = await this.Service.put(pedido,token);
            return res.status(200).json(order);
        } catch (error) {
            throw new Error;
        }
    }
    async getOrderRealized(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const orderRealizeded = await this.Service.get(token,[{field:'status',value:'R'}],[{field:'take',value:'10'},{field:'orderBy',value:'data_criacao'},{field:'OrderController',value:'desc'}]);
            return res.status(200).json(orderRealizeded);

        } catch (error) {
            throw new Error;
        }
    }
    async updateOrderStatus(req: Request, res: Response){
        try {
            const { id } = req.body;
            const token = getAuthorization(req.headers);
            const canceledOrder = await this.Service.put(id,token);
            return res.status(200).json(canceledOrder);

        } catch (error) {
            throw new Error;
        }
    }
    async getOrderByPaymentMethod(req: Request, res: Response){
        try {
            const {method} = req.body;
            const token = getAuthorization(req.headers);

            const pedido = await this.Service.get(token,[{field:'forma_pagamento', value:method}],[{field:'take',value:'10000'}]);
            const listId:number[] = [];
            for (let i = 0; i < pedido.length; i++) {
                listId.push(pedido[i].id!);
            }
            const PedidoResponse: any[] =[];
            if(listId.length > 0){
                const itens = await this.Service.getOrderByListId(listId,token);

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



}