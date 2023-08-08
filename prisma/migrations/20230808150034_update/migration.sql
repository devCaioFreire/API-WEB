/*
  Warnings:

  - You are about to drop the column `items` on the `datasale` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `datasale` DROP COLUMN `items`;

-- CreateTable
CREATE TABLE `DataItems` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ean` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `dataSaleSaleID` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DataItems` ADD CONSTRAINT `DataItems_dataSaleSaleID_fkey` FOREIGN KEY (`dataSaleSaleID`) REFERENCES `DataSale`(`saleID`) ON DELETE SET NULL ON UPDATE CASCADE;
