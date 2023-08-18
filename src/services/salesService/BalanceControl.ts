import { prisma } from "../../prisma";

export async function atualizarSaldo(produto_id: number, quantidade: number) {
  // Lógica para atualizar o saldo do produto
  await prisma.produtos.update({
    where: { id: produto_id },
    data: {
      saldo: {
        decrement: quantidade // Subtrai a quantidade vendida do saldo
      }
    }
  });
}

export async function criarMovimentacao(pedido_venda_id: number, produto_id: number, quantidade: number) {
  await prisma.produtos_movimentacoes.create({
    data: {
      pedido_venda_id: pedido_venda_id,
      produto_id: produto_id,
      quantidade: -quantidade, // Quantidade negativa para representar venda
      tipo_movimentacao: "Venda" // Ou outro tipo de movimentação apropriado
    }
  });
}
