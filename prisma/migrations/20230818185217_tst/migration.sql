-- DropForeignKey
ALTER TABLE `produtos_movimentacoes` DROP FOREIGN KEY `produtos_movimentacoes_pedido_venda_id_fkey`;

-- AlterTable
ALTER TABLE `pedidos_venda_itens` ADD COLUMN `pedido_venda_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `produtos_movimentacoes` ADD COLUMN `pedidos_vendaId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `produtos_movimentacoes` ADD CONSTRAINT `produtos_movimentacoes_pedidos_vendaId_fkey` FOREIGN KEY (`pedidos_vendaId`) REFERENCES `pedidos_venda`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
