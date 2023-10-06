/*
  Warnings:

  - You are about to drop the `certificado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `clientes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `clientes_x_produtos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `condicoes_pagamento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `contatos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `docreferenciado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `enderecos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fornecedores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `listas_precos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `listas_precos_x_produtos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `nfeconfig` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notafiscal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notafiscalitem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notafiscalpagamentos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pedido_compra_itens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pedido_compra_pagamentos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pedidos_compra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pedidos_venda` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pedidos_venda_itens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pedidos_venda_pagamentos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `produtos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `produtos_movimentacoes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vendedores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vendedores_x_usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `contatos` DROP FOREIGN KEY `contatos_ibfk_1`;

-- DropForeignKey
ALTER TABLE `docreferenciado` DROP FOREIGN KEY `docreferenciado_ibfk_1`;

-- DropForeignKey
ALTER TABLE `enderecos` DROP FOREIGN KEY `enderecos_ibfk_1`;

-- DropForeignKey
ALTER TABLE `notafiscal` DROP FOREIGN KEY `notafiscal_ibfk_1`;

-- DropForeignKey
ALTER TABLE `notafiscal` DROP FOREIGN KEY `notafiscal_ibfk_2`;

-- DropForeignKey
ALTER TABLE `notafiscalitem` DROP FOREIGN KEY `notafiscalitem_ibfk_1`;

-- DropForeignKey
ALTER TABLE `notafiscalitem` DROP FOREIGN KEY `notafiscalitem_ibfk_2`;

-- DropForeignKey
ALTER TABLE `notafiscalpagamentos` DROP FOREIGN KEY `notafiscalpagamentos_ibfk_1`;

-- DropForeignKey
ALTER TABLE `pedidos_venda_itens` DROP FOREIGN KEY `pedidos_venda_itens_pedido_id_fkey`;

-- DropForeignKey
ALTER TABLE `produtos_movimentacoes` DROP FOREIGN KEY `produtos_movimentacoes_pedidos_vendaId_fkey`;

-- DropTable
DROP TABLE `certificado`;

-- DropTable
DROP TABLE `clientes`;

-- DropTable
DROP TABLE `clientes_x_produtos`;

-- DropTable
DROP TABLE `condicoes_pagamento`;

-- DropTable
DROP TABLE `contatos`;

-- DropTable
DROP TABLE `docreferenciado`;

-- DropTable
DROP TABLE `enderecos`;

-- DropTable
DROP TABLE `fornecedores`;

-- DropTable
DROP TABLE `listas_precos`;

-- DropTable
DROP TABLE `listas_precos_x_produtos`;

-- DropTable
DROP TABLE `nfeconfig`;

-- DropTable
DROP TABLE `notafiscal`;

-- DropTable
DROP TABLE `notafiscalitem`;

-- DropTable
DROP TABLE `notafiscalpagamentos`;

-- DropTable
DROP TABLE `pedido_compra_itens`;

-- DropTable
DROP TABLE `pedido_compra_pagamentos`;

-- DropTable
DROP TABLE `pedidos_compra`;

-- DropTable
DROP TABLE `pedidos_venda`;

-- DropTable
DROP TABLE `pedidos_venda_itens`;

-- DropTable
DROP TABLE `pedidos_venda_pagamentos`;

-- DropTable
DROP TABLE `produtos`;

-- DropTable
DROP TABLE `produtos_movimentacoes`;

-- DropTable
DROP TABLE `vendedores`;

-- DropTable
DROP TABLE `vendedores_x_usuarios`;

-- CreateTable
CREATE TABLE `Usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `ultimo_nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `celular` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL,
    `excluisvo` BOOLEAN NOT NULL,
    `user_token` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
