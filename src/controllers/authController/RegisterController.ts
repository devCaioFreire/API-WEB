import { Request, Response } from 'express';
import { RegisterService } from '../../services/authService/RegisterService';

export class RegisterController {
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
                user_token,
                id_empresa,
                id_grupo_usuario
            } = req.body;

            const registerService = new RegisterService();

            const user = await registerService.execute({
                nome,
                ultimo_nome,
                email,
                senha,
                celular,
                status,
                exclusivo,
                user_token,
                id_empresa,
                id_grupo_usuario
            });

            return res.status(201).json(user);

        } catch (err) {
            return res.status(500).json({ erro: 'Erro ao registrar o usuário: ' + err });
        }
    }
}
