import { createPrismaClientFromJWT } from "../../prisma";
import { ErrorResponse } from "../errorService/ErrorService";

export interface ParamProps {
  field: string;
  value: any;
}
export interface ParamFilter {
  field: string;
  value: any;
}
export interface IQuery {
  where?: Record<string, string | number | boolean>;
  take?: number;
  skip?: number;
  orderBy?: any;
}

export class OrderItemsService {
  async get(token: string, selectors?: ParamFilter[], params?: ParamProps[], ) {

    const prisma = createPrismaClientFromJWT(token);

    try {
      const query: IQuery = { orderBy: { id: 'asc' }, skip: 0, take: 1000, where: {} };
      //Criando o Where
      if (selectors && selectors.length > 0) {
        query.where = {};
        for (const filter of selectors) {
          if (filter.value === '' || filter.value === undefined || filter.value === null) continue;

          const { field, value } = filter;
          query.where[field] = field === 'id' ? parseInt(value) : value;
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
              const campo = Object.getOwnPropertyNames(query.orderBy)[0];
              query.orderBy = { [campo]: param.value };
              break;
          }
        }
        //Calculando o Skip
        query.skip = (query.skip ?? 0) * (query.take ?? 0);
      }
      const orders = await prisma.pedidos_venda_itens.findMany({ where: query.where, skip: query.skip, take: query.take, orderBy: query.orderBy });
      prisma.$disconnect();
      return orders;
    } catch (error) {
      console.log(error);
      throw new ErrorResponse(400, 'Bad Request on Sales Order');
    }
  }

  ParamPropsFormater(Params: ParamFilter[]) {
    for (const param of Params) {
      if (param.value === '' || param.value === undefined || param.value === null) {
        console.log(param.field + 'está com valor vazio');
        continue;
      }

      switch (param.field) {
        case 'saldo':
          if (param.value === 0 || param.value === '0') {
            param.value = { lte: param.value }
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