import { prismaMain } from "../../prisma";

interface UpdateCoupomStatusRequest {
  id: number;
  status: string;
}

export class UpdateCoupomStatusService {
  async execute({ id, status }: UpdateCoupomStatusRequest) {
    try {
      // Atualizar o status do cupom no banco de dados
      await prismaMain.pedidos_venda.update({
        where: { id },
        data: { status },
      });

      // Retorna uma mensagem de sucesso
      return { success: true, message: "Coupom status updated successfully." };
    } catch (error) {
      console.error("Error updating coupom status:", error);
      throw new Error("Failed to update coupom status.");
    }
  }
}
