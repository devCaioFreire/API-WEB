import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { prismaAuth } from "../../prisma";

interface AuthData {
  nome: string;
  ultimo_nome: string;
  email: string;
  senha: string;
  celular: string;
  status: string;
  exclusivo: string;
  user_token: string;
};

export class AuthService {
  async execute(
    {
      nome,
      ultimo_nome,
      email,
      senha,
      celular,
      status,
      exclusivo,
      user_token
    }: AuthData) {

    const hashPassword = await bcrypt.hash(senha, 12);

    const existingUser = await prismaAuth.usuarios.findFirst({ where: { email } })

    if (existingUser) {
      throw new Error("O email já está em uso");
    }
    const token = generateUniqueToken();

    const AuthRegister = await prismaAuth.usuarios.create({
      data: {
        nome,
        ultimo_nome,
        email,
        senha: hashPassword,
        celular,
        status,
        exclusivo,
        user_token: token
      },
    })
    return AuthRegister;
  }
}

function generateUniqueToken() {
  const uniqueToken = randomBytes(64).toString('hex');
  return uniqueToken;
}