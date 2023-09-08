import { prismaMain } from "../../prisma";
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
export class ProductService {
  async execute(ean: string) {
    try {
      const products = await prismaMain.produtos.findFirst({
        where: { codEAN: ean }
      });
      return products;
    } catch (err) {
      throw new Error('Erro ao buscar produtos no banco de dados');
    }
  }
  async get(selectors?: ParamFilter[], params?: ParamProps[]) {
    try {
      const query: IQuery = {};
      //Criando o Where
      if (selectors && selectors.length > 0) {
        query.where = {};
        for (const filter of selectors) {
          if(filter.value === '' || filter.value === undefined || filter.value === null) continue;
          console.log(filter.field, filter.value)
          const { field, value } = filter;
          query.where[field] = field === 'id' ? parseInt(value) : value;
        }
      }

      query.take = 20
      //Criando os Filtros
      if (params && params.length > 0) {
        for (const param of params) {
          switch (param.field) {
            case 'take':
              query.take = parseInt(param.value);
            case 'page':
              query.skip = (param.value) * query.take;
              break;
            case 'orderBy':
              query.orderBy = { id: 'asc', };
              break;
          }
        }
      }
      const produtos = await prismaMain.produtos.findMany({ where: query.where, skip: query.skip, take: query.take, orderBy: query.orderBy });
      // await prismaMain.$disconnect();
      return produtos;
    }catch (error) {
      console.log(error);
      throw new ErrorResponse(400,'Bad Request nos produtos');
    }
  }
  ParamPropsFormater(Params: ParamFilter[]) {
    for (const param of Params) {
      switch (param.field) {
        case 'saldo':
          if (param.value === 0 || param.value ===  '0') {
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