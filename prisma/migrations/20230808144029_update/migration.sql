/*
  Warnings:

  - The primary key for the `datasale` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `datasale` table. All the data in the column will be lost.
  - You are about to drop the `dataitems` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `items` to the `DataSale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productID` to the `DataSale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saleID` to the `DataSale` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `dataitems` DROP FOREIGN KEY `DataItems_dataSaleId_fkey`;

-- AlterTable
ALTER TABLE `datasale` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `items` JSON NOT NULL,
    ADD COLUMN `productID` INTEGER NOT NULL,
    ADD COLUMN `saleID` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`saleID`);

-- DropTable
DROP TABLE `dataitems`;
