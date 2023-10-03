import { Request, Response } from "express";
import { getLastProductService } from "../../services/productsService/LastProductService";

export class getLastProductController {
  async handle(req: Request, res: Response) {
    try {
      // Extrair o token do header Authorization
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({ error: 'Token não fornecido' });
      }

      const [, token] = authHeader.split(' ');
      if (!token || token.trim() === '') {
        throw new Error("Token inválido ou ausente");
      }

      const nextProduct = await getLastProductService(token);
      res.status(200).json({ nextProduct });
    } catch (error) {
      console.error('Erro no controller getNextProduct:', error);
      res.status(500).json({ error: 'Erro ao obter o próximo número de produto' });
    }
  }
}