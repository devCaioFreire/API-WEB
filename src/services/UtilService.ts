/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from 'jsonwebtoken';
import { IQuery, ParamFilter, ParamProps } from '../models/utils.model';
import { IncomingHttpHeaders } from 'http';
import { Request } from 'express';

export class Utils_service {
    decodeToken(token:string){
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
        if (!decoded || !decoded.id_company) {
            throw new Error('Invalid JWT');
        }
        return decoded;
    }
}
export function  ParamPropsFormater(Params: ParamFilter[]) {
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
//transforma o Req.query nos filtros e configurações do get
export function GetPropsAndFilters(Req:Request){
    let ParamConfig: ParamProps[] = [];
    const ParamFilter: ParamFilter[] = [];

    Object.entries(Req.query).map(([field, value]) => (
        ParamConfig.push({ field: field, value: value })
    ));

    const filters = ParamConfig.filter(element => element.field === 'filter');

    ParamConfig = ParamConfig.filter(element => element.field != 'filter');
    if (filters != undefined && filters != null) {
        for (const filter of filters) {
            const json = JSON.parse(filter.value);
            json.forEach((element: { field: any; value: any; }) => {
                ParamFilter.push({ field: element.field, value: element.value });
            });
        }
    }
    return {ParamConfig,ParamFilter};
}
//Monta o Query para fazer o Get no Prisma
export function buildQuery(selectors?: ParamFilter[], params?: ParamProps[]): IQuery {
    const query: IQuery = { orderBy: { id: 'asc' }, skip: 0, take: 20, where: {} };
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
                // eslint-disable-next-line no-case-declarations
                const campo = Object.getOwnPropertyNames(query.orderBy)[0];
                query.orderBy = { [campo]: param.value };
                break;
            }
        }
        
        //Calculando o Skip
        query.skip = (query.skip ?? 0) * (query.take ?? 0);
    }
    return query;
}
//Pega o Token do Header
export function getAuthorization(ReqHeader: IncomingHttpHeaders):string{
    try {
        let { authorization } = ReqHeader;
        if (!authorization) throw new Error('Token Invalid Or Not Found');
        authorization = authorization.split(' ')[1];
        return authorization;
    } catch (error) {
        console.log(error);
    }

}
// Função para converter campos BigInt em strings
export function convertBigIntToString(obj: any){
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (typeof obj[key] === 'bigint') {
                obj[key] = obj[key].toString();
            }
        }
    }
}