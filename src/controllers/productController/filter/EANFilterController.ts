import { Request, Response } from "express";
import { GetEANProductsService } from "../../../services/productsService/filter/EANFilterService";

export class GetEANProductsController {
  async handle(req: Request, res: Response) {
    const { ean } = req.params;

    let { authorization } = req.headers;
    if (!authorization) throw new Error('Token Invalid Or Not Found');
    authorization = authorization.split(' ')[1];

    const eanProduct = new GetEANProductsService();

    try {
      const product = await eanProduct.execute(ean, authorization);
      console.log(product);
      return res.json(product);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar produto' });
    }
  }
}





