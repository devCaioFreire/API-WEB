import { Request, Response } from "express";
import { GetAllProductService } from "../../services/productsService/GetAllProductService";

export class GetAllProductController {
  async handle(req: Request, res: Response) {
    const createGetAllProductService = new GetAllProductService();
    const getProducts = await createGetAllProductService.execute();

    // Converter campos BigInt para números
    const productsWithoutBigInt = getProducts.map((product) => {
      return {
        ...product,
        id: Number(product.id),
        codProduto: Number(product.codProduto),
        vlrUnCom: Number(product.vlrUnCom),
        saldo: Number(product.saldo),
      };
    });

    return res.json(productsWithoutBigInt);
  }
}
