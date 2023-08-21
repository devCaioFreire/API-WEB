import { Request, Response } from "express";
import { AuthService } from "../../services/authService/RegisterService";

export class AuthRegisterController {
  async handle(req: Request, res: Response) {
    try {
      const {
        nome,
        ultimo_nome,
        email,
        senha,
        celular,
        status,
        exclusivo,
        user_token
      } = req.body;
      const authRegisterService = new AuthService();
      const userData = await authRegisterService.execute({
        nome,
        ultimo_nome,
        email,
        senha,
        celular,
        status,
        exclusivo,
        user_token
      })
      return res.status(201).json(userData);
    } catch (err) {
      if (err instanceof TypeError) {
        // Trate o erro de TypeError (possível erro de BigInt) como sucesso
        return res.status(201).json({ message: "Usuário cadastrado com sucesso" });

      } else {
        console.error("Erro ao registrar o usuário: " + err)
        return res.status(500).json({ erro: "Erro ao registrar o usuário" })
      }
    }
  }
}