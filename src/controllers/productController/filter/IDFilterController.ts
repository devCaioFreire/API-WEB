import { Request, Response } from "express";
import { GetIDProductsService } from "../../../services/productsService/filter/IDFilterService";

export class GetIDProductsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    console.log('productID:', id);
    const idAsNumber = parseInt(id);

    const idProduct = new GetIDProductsService();

    try {
      const product = await idProduct.execute(idAsNumber);
      console.log(product);
      return res.json(product);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar produto' });
    }
  }
}