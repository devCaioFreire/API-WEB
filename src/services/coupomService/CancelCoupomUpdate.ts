import { createPrismaClientFromJWT } from "../../prisma";

interface UpdateCoupomStatusRequest {
  id: number;
  status: string;
}

export class UpdateCoupomStatusService {
  async execute({ id, status }: UpdateCoupomStatusRequest, token: string) {

    token = token.slice(7)
    const prisma = createPrismaClientFromJWT(token);

    try {
      // Atualizar o status do cupom no banco de dados
      await prisma.pedidos_venda.update({
        where: { id },
        data: { status },
      });
      prisma.$disconnect();

      // Retorna uma mensagem de sucesso
      return { success: true, message: "Coupom status updated successfully." };
    } catch (error) {
      console.error("Error updating coupom status:", error);
      throw new Error("Failed to update coupom status.");
    }
  }
}
