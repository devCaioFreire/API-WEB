import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prismaAuth } from "../../prisma";

interface LoginData {
  name?: string;
  ultimo_nome?: string;
  email: string;
  senha: string;
}

export class LoginService {
  async execute({ email, senha }: LoginData) {
    const user = await prismaAuth.usuarios.findFirst({
      where: { email }
    })

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const passwordMatch = await bcrypt.compare(senha, user.senha!);
    console.log('Provided Email:', user.email);
    console.log('Provided Password:', senha);
    console.log('Stored Hashed Password:', user.senha);
    console.log('Is Password Match:', passwordMatch);

    if (!passwordMatch) {
      throw new Error('Credenciais inválidas');
    }

    const token = generateToken(user);

    return { user, token };
  }
}

function generateToken(user: any): string {
  const secretKey = process.env.JWT_SECRET;

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.nome,
      lastName: user.ultimo_nome,
      id_company: user.id_empresa
    },
    secretKey!);

  return token;
}