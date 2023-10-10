import { Request, Response } from 'express';
import { LoginService } from '../../services/authService/LoginService';

export class LoginController {
    async handle(req: Request, res: Response) {
        try {
            const { email, senha } = req.body;
            const loginService = new LoginService();
            const { user, token } = await loginService.execute({ email, senha });

            const data = {
                users: {
                    id: user.id,
                    nome: user.nome,
                    sobrenome: user.ultimo_nome,
                    email: user.email,
                    exclusivo: user.exclusivo,
                },
                token
            };
            return res.status(200).json(data);

        } catch (err) {
            return res.status(401).json({ erro: 'Credenciais inválidas' });
        }
    }
}