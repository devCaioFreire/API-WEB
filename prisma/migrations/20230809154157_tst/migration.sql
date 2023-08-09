-- CreateTable
CREATE TABLE `pedidos_venda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` INTEGER NULL,
    `vendedor_id` INTEGER NULL,
    `vendedor_nome` VARCHAR(191) NULL,
    `vendedor_id_sirius` INTEGER NULL,
    `cliente_id` INTEGER NULL,
    `cliente_nome` VARCHAR(191) NULL,
    `cliente_id_sirius` INTEGER NULL,
    `usuario_id` INTEGER NULL,
    `desconto` DOUBLE NULL,
    `valor_bruto` DOUBLE NULL,
    `valor_liquido` DOUBLE NULL,
    `forma_pagamento` VARCHAR(191) NULL,
    `pagamento` DOUBLE NULL,
    `troco` DOUBLE NULL,
    `status` VARCHAR(1) NULL,
    `observacoes` VARCHAR(191) NULL,
    `data_criacao` DATETIME(3) NULL,
    `cliente_contato` VARCHAR(191) NULL,
    `data_realizacao` DATETIME(3) NULL,
    `data_sincronizacao` DATETIME(3) NULL,
    `condicao_pagamento_id` INTEGER NULL,
    `entrega_cep` VARCHAR(191) NULL,
    `entrega_logradouro` VARCHAR(191) NULL,
    `entrega_numero` VARCHAR(191) NULL,
    `entrega_complemento` VARCHAR(191) NULL,
    `entrega_bairro` VARCHAR(191) NULL,
    `entrega_cidade` VARCHAR(191) NULL,
    `entrega_uf` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedidos_venda_itens` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pedido_id` INTEGER NOT NULL,
    `produto_id` INTEGER NULL,
    `produto_sirius_id` INTEGER NULL,
    `descricao` VARCHAR(191) NULL,
    `unidade` VARCHAR(191) NULL,
    `quantidade` INTEGER NOT NULL,
    `valor_unitario` DOUBLE NULL,
    `valor_total` DOUBLE NULL,
    `ean` VARCHAR(191) NOT NULL,
    `codigo` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pedidos_venda_itens` ADD CONSTRAINT `pedidos_venda_itens_pedido_id_fkey` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos_venda`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
