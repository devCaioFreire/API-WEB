import { Request, Response } from "express";
import { getLastProductService } from "../../services/productsService/LastProductService";

export class getLastProductController {
  async handle(req: Request, res: Response) {
    try {
      const nextProduct = await getLastProductService();
      res.status(200).json({ nextProduct });
    } catch (error) {
      console.error('Erro no controller getNextProduct:', error);
      res.status(500).json({ error: 'Erro ao obter o próximo número de produto' });
    }
  }
}