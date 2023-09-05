import { prismaMain } from "../../prisma";
import { produtos } from '../../../prisma/databases/main/index';

export interface ParamProps {
  field: string;
  value: any;
}
export interface ParamFilter {
  field: string;
  value: any;
}
export interface IQuery{
  where?:Record<string, string | number | boolean>;
  take?:number;
  skip?:number;
  orderBy?:any;
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
  async get(selectors?: ParamFilter[], params?:ParamProps[]){
    const query: IQuery = {};
     //where
		if (selectors && selectors.length > 0) {
			query.where = {};
			for (const filter of selectors) {
				query.where[filter.field] = filter.value;
			}
		}
    query.take = 20
    //propriedades
    if (params && params.length > 0) {
			for (const param of params) {
				switch (param.field) {
          case 'page':
              query.skip = (param.value - 1) * query.take;
            break;
          case 'orderBy':
              query.orderBy = param.value;
            break;
        }
			}
		}
		const produtos = await prismaMain.produtos.findMany({where:query.where, skip:query.skip,take:query.take, orderBy:query.orderBy});
		await prismaMain.$disconnect();
		return produtos;
  }
  ParamPropsFormater(Params: ParamFilter[]){
    for (const param of Params) {
      switch (param.field) {
        case 'saldo':
          if(param.value == 0 || param.value == '0'){
            param.value = {lte: param.value}
            break;
          }
          param.value = {gte: param.value};
          break;
        case 'descricao':
          param.value = {contains: param.value};
          break;
      }
    }
    return Params;
  }
}