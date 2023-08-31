import { Request, Response } from "express";
import { GetEANProductsService } from "../../../services/productsService/filter/EANFilterService";

export class GetEANProductsController {
  async handle(req: Request, res: Response) {
    const { codEAN } = req.params;
    console.log('CODE EAN:', codEAN);

    const eanProduct = new GetEANProductsService();

    try {
      const product = await eanProduct.execute(codEAN);
      console.log(product);
      return res.json(product);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar produto' });
    }
  }
}





