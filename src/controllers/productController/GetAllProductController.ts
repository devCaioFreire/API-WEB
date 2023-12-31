import { Request, Response } from "express";
import { AllProductsService } from "../../services/productsService/GetAllProductService";

export class AllProductsController {
  async handle(req: Request, res: Response) {
    const { offset, limit } = req.query; 

    const allProductsService = new AllProductsService();

    try {
      const products = await allProductsService.execute(Number(offset), Number(limit));
      return res.json(products);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
  }
}