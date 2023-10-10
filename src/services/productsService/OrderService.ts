/* eslint-disable @typescript-eslint/no-explicit-any */
import { createPrismaClientFromJWT } from '../../prisma';
import { ErrorResponse } from '../errorService/ErrorService';

export interface ParamProps {
  field: string;
  value: any;
}

export interface ParamFilter {
  field: string;
  value: any;
}

export interface IQuery {
  where?: Record<string, string | number | boolean| {gte : any}| {lte : any}>;
  take?: number;
  skip?: number;
  orderBy?: any;
}

export class OrderService {
    async get(token: string, selectors?: ParamFilter[], params?: ParamProps[]) {
        const prisma = createPrismaClientFromJWT(token!);
        try {     
            
            const query: IQuery = { orderBy: { id: 'asc' }, skip: 0, take: 20, where: {}} ;
            //Criando o Where
            if (selectors && selectors.length > 0) {
                query.where = {};
                for (const filter of selectors) {
                    if (filter.value === '' || filter.value === undefined || filter.value === null) continue;
          
                    if (filter.field === 'dateInitial') {
                        const dateCondition = query.where['data_realizacao'] || {};
                        query.where['data_realizacao'] = { ...dateCondition, gte: new Date(filter.value) };
                        continue;
                    }
                    if (filter.field === 'dateFinal') {
                        const dateCondition = query.where['data_realizacao'] || {};
                        query.where['data_realizacao'] = { ...dateCondition, lte: new Date(filter.value) };
                        continue;
                    }
          
                    else {
                        query.where[filter.field] = filter.field === 'id' ? parseInt(filter.value) : filter.value;
                    }
                }
            }
      
            //Criando os Filtros
            if (params && params.length > 0) {
                for (const param of params) {
                    switch (param.field) {
                    case 'take':
                        query.take = parseInt(param.value);
                        break;
                    case 'page':
                        query.skip = param.value;
                        break;
                    case 'orderBy':
                        query.orderBy = { [param.value]: 'asc' };
                        break;
                    case 'order':
                        query.orderBy = { [Object.getOwnPropertyNames(query.orderBy)[0]]: param.value };
                        break;
                    }
                }
                //Calculando o Skip
                query.skip = (query.skip ?? 0) * (query.take ?? 0);
            }

            const PedidoVenda = await prisma.pedidos_venda.findMany({ where: query.where, skip: query.skip, take: query.take, orderBy: query.orderBy });
            return PedidoVenda;
        } catch (error) {
            throw new ErrorResponse(400, 'Bad Request nos pedidos');
        }finally{
            prisma.$disconnect();
        }
    }

    ParamPropsFormater(Params: ParamFilter[]) {
        for (const param of Params) {
            if (param.value === '' || param.value === undefined || param.value === null) {

                continue;
            }

            switch (param.field) {
            case 'saldo':
                if (param.value === 0 || param.value === '0') {
                    param.value = { lte: param.value };
                    break;
                }
                param.value = { gte: param.value };
                break;
            case 'descricao':
                param.value = { contains: param.value };
                break;
            }
        }
        return Params;
    }
}