import { Request, Response } from 'express';
import { GetPropsAndFilters, convertBigIntToString, getAuthorization } from '../services/UtilService';
import { ProductService } from '../services/ProductService';
import { IProduct } from '../models/product.model';
export class ProductController{

    async addProduct(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const produto:IProduct = {...req.body};
            const Service = new ProductService();
            const addedProduct = Service.create(produto,token);

            
            return res.status(201).json(convertBigIntToString(addedProduct));
        } catch (error) {
            console.log(error);
        }
    }
    async getProducts(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const  {ParamConfig,ParamFilter} = GetPropsAndFilters(req);
            const Service = new ProductService();
            const products = await Service.get(token, ParamFilter, ParamConfig);

            return res.status(200).json(products);
        } catch (error) {
            console.log(error);
        }
    }
    async getAllProduct(req: Request, res: Response) {
        try {
            const token = getAuthorization(req.headers);
            const { limit, offset } = req.body as { limit: number, offset: number };
            const Service = new ProductService();
            const products = await Service.get(token, [], [
                { field: 'take', value: limit ?? 0 },
                { field: 'skip', value: offset ?? 0 },
            ]);
    
            return res.status(200).json(products);
        } catch (error) {
            console.log(error);
        }
    }
    async updateProduct(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);

            const product:IProduct = {...req.body};
            const Service = new ProductService();
            const updatedProduct = await Service.put(product, token);

            return res.json(updatedProduct);

        } catch (error) {
            console.log(error);
        }
    }
    async deleteProduct(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const id = parseInt(req.params.id);
            const Service = new ProductService();
            const deletedProduct = await Service.delete(id, token);

            return res.status(200).json(deletedProduct);

        } catch (error) {
            console.log(error);
        }
    }
    async getLastProduct(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const Service = new ProductService();
            const product = await Service.get(token,[{field:'order',value:'desc'}],[{field:'take',value:'1'}]);

            return res.status(200).json(product);
        } catch (error) {
            console.log(error);
        }
    }
    async getProductByDescription(req: Request, res:Response){
        try {
            const token = getAuthorization(req.headers);
            const descricao = req.query.descricao as string;
            const page = req.query.page;
            const Service = new ProductService();
            const product = await Service.get(token,[{field:'descricao',value:descricao},{field:'status',value:'A'}],[{field:'page',value:page}]);

            return res.status(200).json(product);
        } catch (error) {
            console.log(error);
        }
    }
    async GetProductByEAN(req: Request, res:Response){
        try {
            const token = getAuthorization(req.headers);
            const ean = req.body.codEAN;
            const Service = new ProductService();
            const product = await Service.get(token,[{field:'codEAN',value:ean},{field:'status',value:'A'}],[{field:'take',value:1}]);

            return res.status(200).json(product);
        } catch (error) {
            console.log(error);
        }
    }

}