import { PrismaClient } from '@prisma/client';
import { IProduct } from '../models/product.model';
import {  ParamFilter, ParamProps } from '../models/utils.model';
import { ErrorResponse } from './ErrorService';
import { buildQuery, ParamPropsFormater } from './UtilService';


export class ProductService {
    async get(filtro: ParamFilter[], params: ParamProps[],prisma:PrismaClient ) {
        try {
            if(filtro){filtro = ParamPropsFormater(filtro);}
            const query = buildQuery(filtro,params);
            const produtos = await prisma.produtos.findMany({ where: query.where, skip: query.skip, take: query.take, orderBy: query.orderBy });
            return produtos;
        } catch (error) {
            throw new ErrorResponse(500, 'Erro ao Procurar Produtos');
        }
    }
    async put(product: IProduct, prisma:PrismaClient) {        
        try {
            const existingProduct = await prisma.produtos.findUnique({
                where: { id: product.id }
            });
      
            if (!existingProduct) {
                throw new Error('Produto não encontrado');
            }
      
            const updatedProduct = await prisma.produtos.update({
                where: { id: product.id },
                data: {
                    codProduto: product.codProduto,
                    descricao: product.descricao,
                    vlrUnCom: parseFloat(product.vlrUnCom!.toString()),
                    saldo: parseFloat(product.saldo!.toString()),
                    status: product.status,
                    unCom: product.unCom,
                    codEAN: product.codEAN,
                    ncm: product.ncm,
                    cfop: product.cfop
                }
            });
      
            return updatedProduct;
        }catch(err){
            throw new ErrorResponse(500,'Erro: Erro ao tentar atualizar o produto');
        }
    }
      
    async delete(productId:number,prisma:PrismaClient){
        try {
            const product = await prisma.produtos.findUnique({where:{id:productId}});
            if(!product){throw new ErrorResponse(404, 'Produto Não Encontrado');}
            const productDeleted = await prisma.produtos.delete({where:{id:product.id}});
            return productDeleted;
        } catch (error) {
            throw new ErrorResponse(500, 'Erro ao Tentar Deletar');
        }

    }
    async create(produto:IProduct,prisma:PrismaClient){
        try {
            return await prisma.$transaction(async (prisma:PrismaClient) => {
                let createdProduct;
                if((await prisma.produtos.findMany({where:{codEAN:produto.codEAN}})).length > 0){
                    throw new Error('Codigo EAN Já Cadastrado'); 
                }else{
                    createdProduct = await prisma.produtos.create({data: {
                        codProduto: produto.codProduto,
                        descricao: produto.descricao,
                        vlrUnCom: parseFloat(produto.vlrUnCom!.toString()),
                        saldo: parseFloat(produto.saldo!.toString()),
                        status: produto.status,
                        unCom: produto.unCom,
                        codEAN: produto.codEAN,
                        ncm: produto.ncm,
                        cfop: produto.cfop
                    }});
                }

                return createdProduct;
            });
        } catch (error) {
            throw new ErrorResponse(500, 'Erro ao tentar criar produto');
        }
    }
}