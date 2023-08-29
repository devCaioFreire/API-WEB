import { Request, Response } from "express";
import { DeleteProductService } from "../../services/productsService/DeleteProductService";

export class DeleteProductController {
  async handle(req: Request, res: Response) {
    const id = req.params.id.toString();
    const deleteProduct = new DeleteProductService();
    const product = await deleteProduct.execute({ id });

    const convertBigIntToString = (obj: any) => {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          if (typeof obj[key] === 'bigint') {
            obj[key] = obj[key].toString();
          }
        }
      }
    };

    convertBigIntToString(product);
    return res.json(product);
  }
}