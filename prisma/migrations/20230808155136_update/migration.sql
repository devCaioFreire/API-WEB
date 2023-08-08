/*
  Warnings:

  - You are about to drop the `dataitemsondatasale` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `dataitemsondatasale` DROP FOREIGN KEY `DataItemsOnDataSale_dataItemId_fkey`;

-- DropForeignKey
ALTER TABLE `dataitemsondatasale` DROP FOREIGN KEY `DataItemsOnDataSale_dataSaleId_fkey`;

-- AlterTable
ALTER TABLE `dataitems` ADD COLUMN `dataSaleSaleID` INTEGER NULL;

-- DropTable
DROP TABLE `dataitemsondatasale`;

-- AddForeignKey
ALTER TABLE `DataItems` ADD CONSTRAINT `DataItems_dataSaleSaleID_fkey` FOREIGN KEY (`dataSaleSaleID`) REFERENCES `DataSale`(`saleID`) ON DELETE SET NULL ON UPDATE CASCADE;
