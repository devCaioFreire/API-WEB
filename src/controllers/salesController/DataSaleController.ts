import { Request, Response } from "express";
import { DataSaleService } from "../../services/salesService/DataSaleService";

export class DataSaleController {
  async handle(req: Request, res: Response) {
    const { totalValue, paymentMethod, discount, cashChange, sellerId, items } = req.body;

    const createDataSaleService = new DataSaleService();
    const dataSales = await createDataSaleService.execute({ totalValue, paymentMethod, discount, cashChange, sellerId, items });

    return res.json(dataSales);
  }
}