import { IProduct } from '../models/product.model';
import {  ParamFilter, ParamProps } from '../models/utils.model';
import { createPrismaClientFromJWT } from '../prisma';
import { ErrorResponse } from './errorService/ErrorService';
import { buildQuery } from './UtilService';

export class ProductService {
    async get(token: string, selectors?: ParamFilter[], params?: ParamProps[] ) {
        const prisma = await createPrismaClientFromJWT(token);
        try {
            const query = buildQuery(selectors,params);
            const produtos = await prisma.produtos.findMany({ where: query.where, skip: query.skip, take: query.take, orderBy: query.orderBy });
            return produtos;
        } catch (error) {
            throw new ErrorResponse(400, 'Bad Request nos produtos');
        }
        finally{
            prisma.$disconnect();
        }
    }
    async put(produto:IProduct, token:string){
        const prisma = await createPrismaClientFromJWT(token);
        try {
            const product = await prisma.produtos.findUnique({where:{id:produto.id}});
            if(!product){
                throw Error;
            }
            const updatedProduct = await prisma.produtos.update({where:{id:produto.id},data:{...produto}});
            return updatedProduct;
        } catch (error) {
            throw  Error;
        }
        finally{
            prisma.$disconnect();
        }

    }
    async delete(productId:number, token:string){
        const prisma = await createPrismaClientFromJWT(token);
        try {
            const product = await prisma.produtos.findUnique({where:{id:productId}});
            if(!product){throw new ErrorResponse(404, 'Produto Não Encontrado');}
            const productDeleted = await prisma.produtos.delete({where:{id:product.id}});
            return productDeleted;
        } catch (error) {
            throw new ErrorResponse(400, 'Bad Request nos produtos');
        }
        finally{
            prisma.$disconnect();
        }
    }
    async create(produto:IProduct, token:string){
        const prisma = await createPrismaClientFromJWT(token);
        try {
            const createdProduct = await prisma.produtos.create({data:{...produto}});
            return createdProduct;
        } catch (error) {
            throw new ErrorResponse(400, 'Bad Request nos produtos');
        }
        finally{
            prisma.$disconnect();
        }
    }
}