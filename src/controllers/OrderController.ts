/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { GetPropsAndFilters, decodeToken, getAuthorization } from '../services/UtilService';
import { OrderService } from '../services/OrderService';
import { IPedidoItem, IPedidoVenda } from '../models/order.model';
import { createPrismaClientFromJWT, prismaAuth } from '../prisma';
import { OrderItemService } from '../services/OrderItemService';
import { ProductMovimentacion } from '../models/balance.model';
import { BalanceService } from '../services/BalanceService';
import { ErrorResponse } from '../services/ErrorService';
export class OrderController{
    
    async getNextOrderNumberController(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const Service = new OrderService();
            const id = await Service.getNextOrderNumber(token); 
            
            return res.status(200).json({id});
        } catch (error) {
            console.log(error);
        }
    }
    async createOrder(req: Request, res: Response){
        const token = getAuthorization(req.headers);
        const prisma = await createPrismaClientFromJWT(token);
        try {
            return await prisma.$transaction(async (prisma) => {
                
                const pedido:IPedidoVenda = {...req.body};
    
                const Service = new OrderService();
                const itemService = new OrderItemService();
                const balanceService = new BalanceService();
    
                const empresa = await prismaAuth.empresas.findUnique({where:{id:decodeToken(token).idCompany}});
                const { itens, ...pedidoInfo } = pedido;
    
                //Criando Pedido
                const pedidoCreated = await Service.create(pedidoInfo,prisma);
                //pegando dados da empresa 
                const dadosEmpresa = {
                    nomeEmpresa: empresa!.xRazaoSocial,
                    endereco: `${empresa!.xLgr}, ${empresa!.nro}`,
                    cidadeEstado: `${empresa!.xMun}, ${empresa!.uf}`,
                    cep:empresa!.cep ,
                    telefone:empresa!.fone,
                };
                // Se houver itens, crie os itens do pedido e prepara objeto para movimentação
                const productMovimentacion: ProductMovimentacion[] = [];
                if (itens) { itens.forEach(item => {
                    item.pedido_id = pedidoCreated.id;
                    productMovimentacion.push({
                        pm_pedido_venda_id: pedidoCreated.id,
                        pm_produto_id: item.produto_id,
                        pm_usuario_id: pedidoCreated.usuario_id!,
                        pm_quantidade: -item.quantidade!,
                        pm_tipo_movimentacao: 'Venda',
                        pm_numero_nota_fiscal: null,
                        pm_observacao: null
                    });
                }); }
                await itemService.create((itens??[]), prisma);
                //Fazendo Movimentação
                await balanceService.create(productMovimentacion,prisma);
    
                //Montando Resposta
                const dadosPedido = {id:pedidoInfo.id,data: pedidoInfo.data_realizacao,itens, valorTotal: pedidoInfo.valor_liquido};
                return res.status(200).json({dadosEmpresa,dadosPedido});});
            
        } catch (error) {
            console.log(error);
        }finally{
            await prisma.$disconnect();
        }
    }
    async getOrder(req: Request, res: Response){
        const prisma = await createPrismaClientFromJWT(getAuthorization(req.headers));
        try {
            const  {ParamConfig,ParamFilter} = GetPropsAndFilters(req);
            const Service = new OrderService();
            const orders = await Service.get(ParamFilter, ParamConfig, prisma);
            return res.status(200).json(orders);
        } catch (error) {
            console.log(error);
            throw new ErrorResponse(500,'Erro ao Procurar Pedidos');
        }finally{
            await prisma.$disconnect();
        }
    }
    async CancelOrder(req: Request, res: Response){
        const prisma = await createPrismaClientFromJWT(getAuthorization(req.headers));
        try {
            return await prisma.$transaction(async (prisma) => {
                const pedido = parseInt(req.body.id);

                const Service = new OrderService();
                const itensService = new OrderItemService();
                const balanceService = new BalanceService();
    
    
                const order = await Service.put(pedido,prisma);
                const itens: IPedidoItem[] = await itensService.get([{field:'pedido_id',value:order.id}],[{field:'take',value:'10000'}],prisma);
                const productMovimentacion: ProductMovimentacion[] = [];
                itens.forEach(item=> productMovimentacion.push({
                    pm_pedido_venda_id: order.id,
                    pm_produto_id: item.produto_id,
                    pm_usuario_id: order.usuario_id!,
                    pm_quantidade: item.quantidade!,
                    pm_tipo_movimentacao: 'Cancelamento de Pedido',
                    pm_numero_nota_fiscal: null,
                    pm_observacao: null
                }));
                await balanceService.create(productMovimentacion,prisma);
                return res.status(200).json(order);});
                
            
        } catch (error) {
            console.log(error);
            throw new ErrorResponse(500,'Erro ao tentar cancelar Pedido');
        }
        finally{
            await prisma.$disconnect();
        }
    }
    async getOrderRealized(req: Request, res: Response){
        const prisma = await createPrismaClientFromJWT(getAuthorization(req.headers));
        try {
            const Service = new OrderService();
            const orderRealizeded = await Service.get([{field:'status',value:'R'}],[{field:'take',value:'10'},{field:'orderBy',value:'data_criacao'},{field:'OrderController',value:'desc'}],prisma);
            return res.status(200).json(orderRealizeded);

        } catch (error) {
            console.log(error);
            throw new ErrorResponse(500,'Erro ao tentar pegar Id');
        }finally{
            await prisma.$disconnect();
        }
    }
    async getOrderByPaymentMethod(req: Request, res: Response){
        const prisma = await createPrismaClientFromJWT(getAuthorization(req.headers));
        try {
            const {method} = req.body;
            

            const Service = new OrderService();
            const pedidos:IPedidoVenda[] = await Service.get([{field:'forma_pagamento', value:method}],[{field:'take',value:'10000'}],prisma);
            const listId:number[] = [];
            pedidos.forEach((pedido) => {listId.push(pedido.id);});
  
            const PedidoResponse: any[] =[];
            if(listId.length > 0){
                const itens = await Service.getOrderByListId(listId,prisma);
                for (let i = 0; i < pedidos.length; i++) {
                    PedidoResponse.push(pedidos);
                    PedidoResponse[i].itens = itens.filter((item)=>item.pedido_id === pedidos[i].id);   
                }
            }
            return res.status(200).json(PedidoResponse);
        } catch (error) {
            throw new ErrorResponse(500,'Erro ao Procurar Pedidos Por methodo de pagamento');
        }finally{
            await prisma.$disconnect();
        }
    }
    async getOrderById(req: Request, res: Response){
        const prisma = await createPrismaClientFromJWT(getAuthorization(req.headers));
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const  {ParamConfig,ParamFilter} = GetPropsAndFilters(req);
            const Service = new OrderService();
            const pedido = await Service.get(ParamFilter,[{field:'take',value:'1'}],prisma);

            const ItemService = new OrderItemService();
            const itens = await ItemService.get([{field:'pedido_id', value:pedido[0].id}],[{field:'take',value:'10000'}],prisma);
            
            return res.status(200).json(itens);
        } catch (error) {
            throw new ErrorResponse(500,'Erro ao Procurar Pedido por id');
        }finally{
            await prisma.$disconnect();
        }
    }



}