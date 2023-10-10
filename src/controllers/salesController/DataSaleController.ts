import { Request, Response } from 'express';
import { DataSaleService } from '../../services/salesService/DataSaleService';
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

export class DataSaleController {
    async handle(req: Request, res: Response) {
    
        let { authorization } = req.headers;
        if (!authorization) throw new Error('Token Invalid Or Not Found');
        authorization = authorization.split(' ')[1];
    
        const {
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
        }: DataSaleRequest = req.body;
        const createDataSaleService = new DataSaleService();
        const dataSales = await createDataSaleService.create(
            {
                status,
                vendedor_id,
                valor_bruto,
                valor_liquido,
                forma_pagamento,
                desconto,
                pagamento,
                troco,
                cpf_cnpj,
                itens
            }, authorization
        );

        return res.json(dataSales);
    }
}