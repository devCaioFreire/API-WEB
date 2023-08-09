/*
  Warnings:

  - You are about to alter the column `ean` on the `pedidos_venda_itens` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `pedidos_venda_itens` MODIFY `quantidade` INTEGER NULL,
    MODIFY `ean` INTEGER NULL;
