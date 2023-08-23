import { Request, Response } from "express";
import { ProductService } from "../../services/productsService/ProductService";


export class ProductController {
  async handle(req: Request, res: Response) {
    const { ean } = req.params; // Recupere o código EAN dos parâmetros da URL
    const productService = new ProductService();

    try {
      const product = await productService.execute(ean);
      if (!product) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      // Função para converter campos BigInt em strings
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
      convertBigIntToString(product);

      return res.json(product);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar produto' });
    }
  }
}