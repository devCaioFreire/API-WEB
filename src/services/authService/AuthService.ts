// import { prisma } from "../../prisma";

// interface AuthData {
//   nome: string;
//   ultimo_nome: string;
//   email: number;
//   senha: number;
//   celular: number;
//   status: string;
//   excluisvo: boolean;
//   user_token: string;
// };

// export class AuthService {
//   async execute(
//     {
//       nome,
//       ultimo_nome,
//       email,
//       senha,
//       celular,
//       status,
//       excluisvo,
//       user_token
//     }: AuthData) {
//     const Auth = await prisma..create({
//       data: {
//         nome,
//         ultimo_nome,
//         email,
//         senha,
//         celular,
//         status,
//         excluisvo,
//         user_token
//       },
//     })

//     return Auth;
//   }
// }