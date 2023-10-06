/*
  Warnings:

  - Made the column `cpf_cnpj` on table `pedidos_venda` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `pedidos_venda` MODIFY `cpf_cnpj` VARCHAR(191) NOT NULL;
