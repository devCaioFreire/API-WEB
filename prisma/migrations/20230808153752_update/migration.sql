/*
  Warnings:

  - You are about to drop the column `dataSaleSaleID` on the `dataitems` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `dataitems` DROP FOREIGN KEY `DataItems_dataSaleSaleID_fkey`;

-- AlterTable
ALTER TABLE `dataitems` DROP COLUMN `dataSaleSaleID`,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- CreateTable
CREATE TABLE `DataItemsOnDataSale` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dataSaleId` INTEGER NOT NULL,
    `dataItemId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DataItemsOnDataSale` ADD CONSTRAINT `DataItemsOnDataSale_dataSaleId_fkey` FOREIGN KEY (`dataSaleId`) REFERENCES `DataSale`(`saleID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataItemsOnDataSale` ADD CONSTRAINT `DataItemsOnDataSale_dataItemId_fkey` FOREIGN KEY (`dataItemId`) REFERENCES `DataItems`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
