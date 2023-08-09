import { Request, Response } from "express";
import { DataSaleService } from "../../services/salesService/DataSaleService";

export class DataSaleController {
  async handle(req: Request, res: Response) {
    const {
      valor_bruto,
      valor_liquido,
      forma_pagamento,
      desconto,
      troco,
      vendedor_id,
      pagamento,
      itens
    } = req.body;

    const createDataSaleService = new DataSaleService();
    const dataSales = await createDataSaleService.execute(
      {
        valor_bruto,
        valor_liquido,
        forma_pagamento,
        desconto,
        troco,
        vendedor_id,
        pagamento,
        itens
      }
    );

    return res.json(dataSales);
  }
}