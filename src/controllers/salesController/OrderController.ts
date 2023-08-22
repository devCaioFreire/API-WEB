import { Request, Response } from "express";
import { getNextOrderNumber } from "../../services/salesService/OrderService";

export class getNextOrderNumberController {
  async handle(req: Request, res: Response) {
    try {
      const nextOrderNumber = await getNextOrderNumber();
      res.status(200).json({ nextOrderNumber });
    } catch (error) {
      console.error('Erro no controller getNextOrderNumber:', error);
      res.status(500).json({ error: 'Erro ao obter o próximo número de pedido' });
    }
  }
}