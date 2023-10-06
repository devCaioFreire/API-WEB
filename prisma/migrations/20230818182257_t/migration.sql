-- CreateIndex
CREATE INDEX `produtos_movimentacoes_pedido_venda_id_fkey` ON `produtos_movimentacoes`(`pedido_venda_id`);

-- AddForeignKey
ALTER TABLE `produtos_movimentacoes` ADD CONSTRAINT `produtos_movimentacoes_pedido_venda_id_fkey` FOREIGN KEY (`pedido_venda_id`) REFERENCES `pedidos_venda`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
