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
  where?: Record<string, string | number | boolean| {gte : Date}| {lt : Date}>;
  take?: number;
  skip?: number;
  orderBy?: any;
}
export interface itens {
    id: number;
    pedido_id: number;
    produto_id: number;
    produto_sirius_id: number | null;
    descricao: string | null;
    unidade: string | null;
    quantidade: number | null;
    valor_unitario: number | null;
    valor_total: number | null;
    ean: string | null;
    codigo: string | null;
}
export interface PedidoVenda {
    id: number|null,
    numero :number|null,
    vendedor_id:number|null,
    vendedor_nome:string|null,
    vendedor_id_sirius:number|null,
    cliente_id:number|null,
    cliente_nome:string|null,
    cliente_id_sirius :number|null,
    usuario_id:number|null,
    desconto  :number|null,
    valor_bruto:number|null,
    valor_liquido :number|null,
    forma_pagamento:string|null,
    pagamento :number|null,
    troco:number|null,
    status:string|null,
    cpf_cnpj:string|null,
    observacoes:string|null,
    data_criacao:Date|null,
    cliente_contato:string|null,
    data_realizacao:Date|null,
    data_sincronizacao:Date|null,
    condicao_pagamento_id:number|null,
    entrega_cep:string|null,
    entrega_logradouro:string|null,
    entrega_numero:string|null,
    entrega_complemento:string|null,
    entrega_bairro:string|null,
    entrega_cidade:string|null,
    entrega_uf:string|null,
    itens?:itens[],
}

export class OrderService {
    async get(token: string, selectors?: ParamFilter[], params?: ParamProps[]) {
        const prisma  = createPrismaClientFromJWT(token!);
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
                        query.where['data_realizacao'] = { ...dateCondition, lt: new Date(filter.value) };
                        query.where['data_realizacao'].lt.setDate((query.where['data_realizacao'].lt as Date).getDate() + 1);
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
            console.log(query.where);
            const PedidoVenda = await prisma.pedidos_venda.findMany({ where: query.where, skip: query.skip, take: query.take, orderBy: query.orderBy });
            return PedidoVenda;
        } catch (error) {
            throw new ErrorResponse(400, 'Bad Request nos pedidos');
        }finally{
            await prisma.$disconnect();
        }
    }
    async getOrderByPaymentMethod(token:string,method:string){
        const prisma  = createPrismaClientFromJWT(token);
        try {
            const SaleOrder:PedidoVenda[] = await prisma.pedidos_venda.findMany({where:{forma_pagamento:method}});
            const listId:number[] = [];
            for (let i = 0; i < SaleOrder.length; i++) {
                listId.push(SaleOrder[i].id!);

            }
            if(listId.length > 0){
                const itens = await prisma.pedidos_venda_itens.findMany({where:{pedido_id:{in: listId}}});

                for (let i = 0; i < SaleOrder.length; i++) {
                    SaleOrder[i].itens = itens.filter((item)=>item.pedido_id === SaleOrder[i].id);   
                }
            }

            return {SaleOrder};  
        } catch (error) {
            console.error(error);
        }finally{
            await prisma.$disconnect();
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