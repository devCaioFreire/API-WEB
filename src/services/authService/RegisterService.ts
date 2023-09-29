import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { prismaAuth } from "../../prisma";

interface RegisterData {
  nome: string;
  ultimo_nome: string;
  email: string;
  senha: string;
  celular: string;
  status: string;
  exclusivo: string;
  user_token: string;
  id_empresa: number;
  id_grupo_usuario: number;
};

export class RegisterService {
  async execute(data: RegisterData) {

    const hashPassword = await bcrypt.hash(data.senha, 12);

    const existingUser = await prismaAuth.usuarios.findFirst({ where: { email: data.email } })

    if (existingUser) {
      throw new Error("O email já está em uso");
    }

    const token = generateUniqueToken();

    const user = await prismaAuth.usuarios.create({
      data: {
        nome: data.nome,
        ultimo_nome: data.ultimo_nome,
        email: data.email,
        senha: hashPassword,
        celular: data.celular,
        status: data.status,
        exclusivo: data.exclusivo,
        user_token: token,
      },
    })

    // Associar o usuário à empresa
    await prismaAuth.usuarios_x_empresas.create({
      data: {
        id_empresa: data.id_empresa,
        id_usuario: user.id,
        id_grupo_usuario: data.id_grupo_usuario
      },
    });


    return user;
  }
}

function generateUniqueToken() {
  const uniqueToken = randomBytes(64).toString('hex');
  return uniqueToken;
}