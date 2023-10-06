import { Request, Response } from "express";
import { UpdateProductService } from "../../services/productsService/UpdateProductService";

export class UpdateProductController {
  async handle(req: Request, res: Response) {
    const {
      id,
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
    const updateNewProduct = new UpdateProductService();
    const updateProduct = await updateNewProduct.execute(
      {
        id,
        codProduto,
        descricao,
        vlrUnCom,
        saldo,
        status,
        unCom,
        codEAN,
        ncm,
        cfop
      }
    );

    // Função para converter campos BigInt em strings
    // const convertBigIntToString = (obj: any) => {
    //   for (const key in obj) {
    //     if (Object.prototype.hasOwnProperty.call(obj, key)) {
    //       if (typeof obj[key] === 'bigint') {
    //         obj[key] = obj[key].toString();
    //       }
    //     }
    //   }
    // };

    // // Converter campos BigInt para strings
    // convertBigIntToString(updateProduct);

    return res.json(updateProduct);
  }
}