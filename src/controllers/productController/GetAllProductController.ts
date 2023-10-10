import { Request, Response } from 'express';
import { AllProductsService } from '../../services/productsService/GetAllProductService';

export class AllProductsController {
    async handle(req: Request, res: Response) {
        const { offset, limit } = req.query; 
        let { authorization } = req.headers;
        if (!authorization) throw new Error('Token Invalid Or Not Found');
        authorization = authorization.split(' ')[1];
        const allProductsService = new AllProductsService();

        try {
            const products = await allProductsService.execute(Number(offset), Number(limit), authorization);
            return res.json(products);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    }
}