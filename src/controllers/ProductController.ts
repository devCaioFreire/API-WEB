import { Request, Response } from 'express';
import { GetPropsAndFilters, convertBigIntToString, getAuthorization } from '../services/UtilService';
import { ProductService } from '../services/ProductService';
import { IProduct } from '../models/product.model';
export class ProductController{
    private Service = new ProductService();
    async addProduct(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const produto:IProduct = {...req.body};

            const addedProduct = await this.Service.create(produto,token);
            
            return res.status(201).json(convertBigIntToString(addedProduct));
        } catch (error) {
            throw new Error;
        }
    }
    async getProducts(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const  {ParamConfig,ParamFilter} = GetPropsAndFilters(req);
            const products = await this.Service.get(token, ParamFilter, ParamConfig);
            return res.status(200).json(products);
        } catch (error) {
            throw new Error;
        }
    }
    async getAllProduct(req: Request, res: Response) {
        try {
            const token = getAuthorization(req.headers);
            const { limit, offset } = req.body as { limit: number, offset: number };
    
            const products = await this.Service.get(token, [], [
                { field: 'take', value: limit ?? 0 },
                { field: 'skip', value: offset ?? 0 },
            ]);
    
            return res.status(200).json(products);
        } catch (error) {
            throw new Error;
        }
    }
    async updateProduct(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const product:IProduct = {...req.body};
            const updatedProduct = await this.Service.put(product, token);

            return res.status(200).json(updatedProduct);

        } catch (error) {
            throw new Error;
        }
    }
    async deleteProduct(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const id = parseInt(req.params.id);
            const deletedProduct = await this.Service.delete(id, token);

            return res.status(200).json(deletedProduct);

        } catch (error) {
            throw new Error;
        }
    }
    async getLastProduct(req: Request, res: Response){
        try {
            const token = getAuthorization(req.headers);
            const product = await this.Service.get(token,[{field:'take',value:'1'}],[{field:'order',value:'desc'}]);

            return res.status(200).json(product);
        } catch (error) {
            throw new Error;
        }
    }

}