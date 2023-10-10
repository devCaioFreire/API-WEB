import { Request, Response } from "express";
import { GetDescriptionProductsService } from "../../../services/productsService/filter/DescriptionFilterService";

export class GetDescriptionProductsController {
  async handle(req: Request, res: Response) {
    const descricao = req.query.descricao as string;
    const page = Number(req.query.page) || 1;

    let { authorization } = req.headers;
    if (!authorization) throw new Error('Token Invalid Or Not Found');
    authorization = authorization.split(' ')[1];

    const descriptionProduct = new GetDescriptionProductsService();

    try {
      const products = await descriptionProduct.execute(descricao, page, authorization);
      console.log(products);
      return res.json(products);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar produto' });
    }
  }
}
