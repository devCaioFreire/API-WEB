import { Request, Response } from "express";
import { GetEANProductsService } from "../../../services/productsService/filter/EANFilterService";

export class GetEANProductsController {
  async handle(req: Request, res: Response) {
    const { ean } = req.params;
    console.log('CODE EAN:', ean);

    const eanProduct = new GetEANProductsService();

    try {
      const product = await eanProduct.execute(ean);
      console.log(product);
      return res.json(product);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar produto' });
    }
  }
}





