/*import { Request, Response } from "express";
import { BalanceService, ParamFilter, ParamProps } from "../../services/salesService/BalanceService";


interface ProductMovimentacion {
    pm_pedido_venda_id: number;
    pm_produto_id: number;
    pm_usuario_id: number | null;
    pm_quantidade: number | null;
    pm_tipo_movimentacao: string;
  }

export class BalanceController{
    async handle(req: Request, res: Response) {
        const params = req.query;
        
        let { authorization } = req.headers;
        if (!authorization) throw new Error('Token Invalid Or Not Found');
        authorization = authorization.split(' ')[1];

        const productMovimentacion: ProductMovimentacion[] = req.body;
        const createBalanceService = new BalanceService();
        const balance = await createBalanceService.create(
            productMovimentacion, authorization, params
        )
        return res.json(balance);
    }
}*/

import { Request, Response } from 'express';
import { ErrorResponse } from '../../services/errorService/ErrorService';
import { BalanceService } from '../../services/salesService/BalanceService';

interface ProductMovimentacion {
    pm_pedido_venda_id: number | null;
    pm_produto_id: number;
    pm_usuario_id: number;
  
    pm_quantidade: number;
    pm_tipo_movimentacao: string;
    pm_numero_nota_fiscal: number | null;
    pm_observacao: string | null;
  }

export class BalanceController {
    async AjusteMovimentacao(req: Request, res: Response){
        const { authorization } = req.headers;
        if (!authorization) throw new Error('Token Invalid Or Not Found');
        const token = authorization.split(' ')[1];
        const productMovimentacion: ProductMovimentacion = req.body;

        const createBalanceService = new BalanceService();
        const balance = await createBalanceService.create(
            [productMovimentacion], token
        );
        return res.status(201).json(balance);
    }
    async EntradaEstoque(req: Request, res: Response){
        const { authorization } = req.headers;
        if (!authorization) throw new Error('Token Invalid Or Not Found');
        const token = authorization.split(' ')[1];
        let productMovimentacion: ProductMovimentacion = req.body;
        productMovimentacion.pm_tipo_movimentacao = 'Entrada de Estoque'
        if(productMovimentacion.pm_quantidade < 0){ throw new ErrorResponse(401,'Entrada Inválida - Quantidade Negativa');} 
        const createBalanceService = new BalanceService();
        
        const balance = await createBalanceService.create(
            [productMovimentacion], token
        );
        return res.status(201).json(balance);
    }

}
