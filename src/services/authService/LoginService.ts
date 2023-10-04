import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prismaAuth } from "../../prisma";

interface LoginData {
  name?: string;
  ultimo_nome?: string;
  email: string;
  senha: string;
  id_empresa?: number;
}

export class LoginService {
  async execute({ email, senha }: LoginData) {
    const user = await prismaAuth.usuarios.findFirst({
      where: { email }
    })
    prismaAuth.$disconnect();

    const userEmpresa = await prismaAuth.usuarios_x_empresas.findFirst({
      where: { id_usuario: user?.id }
    });
    prismaAuth.$disconnect();

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const passwordMatch = await bcrypt.compareSync(senha, user.senha!);

    if (!passwordMatch) {
      throw new Error('Credenciais inválidas');
    }

    const token = generateToken(user, userEmpresa!.id_empresa);

    return { user, token };
  }
}

function generateToken(user: any, id_company?: number): string {
  const secretKey = process.env.JWT_SECRET;

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.nome,
      lastName: user.ultimo_nome,
      id_company: id_company
    },
    secretKey!);

  return token;
}