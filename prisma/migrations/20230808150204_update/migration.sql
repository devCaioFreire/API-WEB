/*
  Warnings:

  - Added the required column `quantity` to the `DataItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `dataitems` ADD COLUMN `quantity` INTEGER NOT NULL;
