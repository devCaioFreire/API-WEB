-- CreateTable
CREATE TABLE `DataSale` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalValue` DOUBLE NOT NULL,
    `sellerId` INTEGER NOT NULL,
    `discount` INTEGER NOT NULL,
    `paymentMethod` VARCHAR(191) NOT NULL,
    `cashChange` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DataItems` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ean` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `dataSaleId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DataItems` ADD CONSTRAINT `DataItems_dataSaleId_fkey` FOREIGN KEY (`dataSaleId`) REFERENCES `DataSale`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
