import { Request, Response } from "express";
import { RegisterService } from "../../services/authService/RegisterService";

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
      const authRegisterService = new RegisterService();
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
      console.error("Erro ao registrar o usuário: " + err)
      return res.status(500).json({ erro: "Erro ao registrar o usuário" })
    }
  }
}