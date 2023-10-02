import { Request, Response } from "express";
import { ParamFilter, ParamProps, ProductService } from '../../services/productsService/ProductService';


export class ProductController {
  async handle(req: Request, res: Response) {
    const requisition = req;
    const params = req.query;
    let ParamConfig: ParamProps[] = [];
    const ParamFilter: ParamFilter[] = [];

    Object.entries(params).map(([field, value]) => (
      ParamConfig.push({ field: field, value: value })
    ));

    const filters = ParamConfig.filter(element => element.field === 'filter');

    ParamConfig = ParamConfig.filter(element => element.field != 'filter');
    if (filters != undefined && filters != null) {
      for (const filter of filters) {
        const json = JSON.parse(filter.value)
        json.forEach((element: { field: any; value: any; }) => {
          ParamFilter.push({ field: element.field, value: element.value })
        });
      }

      // Recupere o código EAN dos parâmetros da URL

      const productService = new ProductService();
      const product = await productService.get(req.headers.authorization, productService.ParamPropsFormater(ParamFilter), ParamConfig);
      if (!product) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      return res.json(product);
    }
  }
}