import { Request, Response } from "express";
import { ErrorResponse } from "../../services/errorService/ErrorService";
import { OrderService } from "../../services/productsService/OrderService";
import { ParamFilter, ParamProps } from '../../services/productsService/ProductService';


export class OrderController {
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
      if (!requisition.headers.authorization) throw new ErrorResponse(400,'Bad Resquest - Token not found');
      
      const orderService = new OrderService();
      const Order = await orderService.get(requisition.headers.authorization, orderService.ParamPropsFormater(ParamFilter), ParamConfig);
      if (!Order) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      return res.json(Order);
    }
  }
}