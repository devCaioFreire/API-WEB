-- CreateTable
CREATE TABLE `produtos_movimentacoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pedido_venda_id` INTEGER NULL,
    `produto_id` INTEGER NOT NULL,
    `saldo_anterior` INTEGER NULL,
    `saldo_atual` INTEGER NULL,
    `quantidade` INTEGER NULL,
    `tipo_movimentacao` VARCHAR(191) NULL,
    `data_hora` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
