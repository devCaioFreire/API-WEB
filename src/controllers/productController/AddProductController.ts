import { Request, Response } from 'express';
import { AddProductService } from '../../services/productsService/AddProductService';

export class AddProductController {
    async handle(req: Request, res: Response) {
        const {
            codProduto,
            descricao,
            vlrUnCom,
            saldo,
            status,
            unCom,
            codEAN,
            ncm,
            cfop
        } = req.body;

        let { authorization } = req.headers;
        if (!authorization) throw new Error('Token Invalid Or Not Found');
        authorization = authorization.split(' ')[1];

        const addNewProduct = new AddProductService();
        const addProduct = await addNewProduct.execute(
            {
                codProduto,
                descricao,
                vlrUnCom,
                saldo,
                status,
                unCom,
                codEAN,
                ncm,
                cfop
            },
            authorization
        );

        // Função para converter campos BigInt em strings
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const convertBigIntToString = (obj: any) => {
            for (const key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    if (typeof obj[key] === 'bigint') {
                        obj[key] = obj[key].toString();
                    }
                }
            }
        };

        // Converter campos BigInt para strings
        convertBigIntToString(addProduct);

        return res.json(addProduct);
    }
}