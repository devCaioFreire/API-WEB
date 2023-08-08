import { Request, Response } from "express";
import { DataSaleService } from "../../services/salesService/DataSaleService";

export class DataSaleController {
  async handle(req: Request, res: Response) {
    const { id, totalValue, paymentMethod, discount, cashChange, sellerId, items } = req.body;

    const createDataSaleService = new DataSaleService();
    const dataSales = await createDataSaleService.execute({ id, totalValue, paymentMethod, discount, cashChange, sellerId, items });

    return res.json(dataSales);
  }
}