import { Request, Response } from 'express';
import { OrderItemsService } from '../../services/productsService/OrderItemsService';
import { ParamFilter, ParamProps } from '../../services/productsService/ProductService';



export class OrderItemsController {
    async handle(req: Request, res: Response) {

        let { authorization } = req.headers;
        if (!authorization) throw new Error('Token Invalid Or Not Found');
        authorization = authorization.split(' ')[1];

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
                const json = JSON.parse(filter.value);
                json.forEach((element: { field: any; value: any; }) => {
                    ParamFilter.push({ field: element.field, value: element.value });
                });
            }

            // Recupere o código EAN dos parâmetros da URL

            const orderItemsService = new OrderItemsService();
            const Order = await orderItemsService.get(authorization, orderItemsService.ParamPropsFormater(ParamFilter), ParamConfig);
            if (!Order) {
                return res.status(404).json({ error: 'Produto não encontrado' });
            }
            return res.json(Order);
        }
    }
}