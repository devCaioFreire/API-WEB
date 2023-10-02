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
  async execute({
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
  }: RegisterData) {

    const hashPassword = await bcrypt.hashSync(senha, 12);
    console.log("Hashed Password:", hashPassword);

    const existingUser = await prismaAuth.usuarios.findFirst({ where: { email: email } })

    if (existingUser) {
      throw new Error("O email já está em uso");
    }

    const token = generateUniqueToken();

    const user = await prismaAuth.usuarios.create({
      data: {
        nome: nome,
        ultimo_nome: ultimo_nome,
        email: email,
        senha: hashPassword,
        celular: celular,
        status: status,
        exclusivo: exclusivo,
        user_token: token,
      },
    })
    console.log("Password on database:", user.senha)

    // Associar o usuário à empresa
    await prismaAuth.usuarios_x_empresas.create({
      data: {
        id_empresa: id_empresa,
        id_usuario: user.id,
        id_grupo_usuario: id_grupo_usuario
      },
    });

    return user;
  }
}

function generateUniqueToken() {
  const uniqueToken = randomBytes(64).toString('hex');
  return uniqueToken;
}