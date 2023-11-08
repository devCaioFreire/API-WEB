import { Request, Response } from 'express';
import { GetPropsAndFilters, convertBigIntToString, getAuthorization } from '../services/UtilService';
import { ProductService } from '../services/ProductService';
import { IProduct } from '../models/product.model';
import { createPrismaClientFromJWT } from '../prisma';
import { ErrorResponse } from '../services/ErrorService';
export class ProductController{

    async addProduct(req: Request, res: Response){
        const prisma = await createPrismaClientFromJWT(getAuthorization(req.headers));
        try {
            //Criação das variaveis
            
            
            const produto:IProduct = {...req.body};

            const Service = new ProductService();
            const addedProduct = Service.create(produto,prisma);

            return res.status(201).json(convertBigIntToString(addedProduct));
        } catch (error) {
            if (error  instanceof Error){
                throw new ErrorResponse(500,error.message);
            }else { throw new ErrorResponse(500,'Erro Desconhecido');}
            
        }finally{
            await prisma.$disconnect();
        }
    }
            
    async getProducts(req: Request, res: Response){
        const prisma = await createPrismaClientFromJWT(getAuthorization(req.headers));
        try {
            const  {ParamConfig,ParamFilter} = GetPropsAndFilters(req);
            const Service = new ProductService();
            const products = await Service.get(ParamFilter, ParamConfig, prisma);

            return res.status(200).json(products);
        } catch (error) {
            console.log(error);
        }finally{
            await prisma.$disconnect();
        }
    }
    async getAllProduct(req: Request, res: Response) {
        const prisma = await createPrismaClientFromJWT(getAuthorization(req.headers));
        try {
            const { limit, offset } = req.body as { limit: number, offset: number };
            const Service = new ProductService();
            const products = await Service.get([], [
                { field: 'take', value: limit ?? 0 },
                { field: 'skip', value: offset ?? 0 },
            ],prisma);
    
            return res.status(200).json(products);
        } catch (error) {
            console.log(error);
        }finally{
            await prisma.$disconnect();
        }
    }
    async updateProduct(req: Request, res: Response){
        const prisma = await createPrismaClientFromJWT(getAuthorization(req.headers));
        try {
            const product:IProduct = {...req.body};
            const Service = new ProductService();
            const updatedProduct = await Service.put(product, prisma);

            return res.json(updatedProduct);

        } catch (error) {
            console.log(error);
        }finally{
            await prisma.$disconnect();
        }
    }
    async deleteProduct(req: Request, res: Response){
        const prisma = await createPrismaClientFromJWT(getAuthorization(req.headers));
        try {
            const id = parseInt(req.params.id);
            const Service = new ProductService();
            const deletedProduct = await Service.delete(id, prisma);

            return res.status(200).json(deletedProduct);

        } catch (error) {
            console.log(error);
        }finally{
            await prisma.$disconnect();
        }
    }
    async getLastProduct(req: Request, res: Response){
        const prisma = await createPrismaClientFromJWT(getAuthorization(req.headers));
        try {
            const Service = new ProductService();
            const product = await Service.get([{field:'order',value:'desc'}],[{field:'take',value:'1'}],prisma);

            return res.status(200).json(product);
        } catch (error) {
            console.log(error);
        }finally{
            await prisma.$disconnect();
        }
    }
    async getProductByDescription(req: Request, res:Response){
        const prisma = await createPrismaClientFromJWT(getAuthorization(req.headers));
        try {
            const descricao = req.query.descricao as string;
            const page = req.query.page;
            const Service = new ProductService();
            const product = await Service.get([{field:'descricao',value:descricao},{field:'status',value:'A'}],[{field:'page',value:page}],prisma);

            return res.status(200).json(product);
        } catch (error) {
            console.log(error);
        }finally{
            await prisma.$disconnect();
        }
    }
    async GetProductByEAN(req: Request, res:Response){
        const prisma = await createPrismaClientFromJWT(getAuthorization(req.headers));
        try {
            const ean = req.params.ean;
            const Service = new ProductService();
            const product = await Service.get([{field:'codEAN',value:ean},{field:'status',value:'A'}],[{field:'take',value:1}], prisma);
            console.log(product);
            return res.status(200).json(product);
        } catch (error) {
            console.log(error);
        }finally{
            await prisma.$disconnect();
        }
    }

}