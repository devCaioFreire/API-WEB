import { createPrismaClientFromJWT } from '../../prisma';

interface CancelCoupomRequest {
  id: number;
  cpf_cnpj: string;
  valor_liquido: number;
  data_criacao: Date;
}

export class CancelCoupomService {
    async execute({ }: CancelCoupomRequest, token: string) {

        token = token.slice(7);
        const prisma = createPrismaClientFromJWT(token);

        const cancelCoupom = await prisma.pedidos_venda.findMany({
            where: {
                status: 'R',
            },
            take: 10,
            orderBy: { data_criacao: 'desc' },
        });
        prisma.$disconnect();
        return cancelCoupom;
    }
} 