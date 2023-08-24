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
    },
    secretKey!);

  return token;
}

// function generateUniqueToken() {
//   const uniqueToken = randomBytes(64).toString('hex');
//   return uniqueToken;
// }