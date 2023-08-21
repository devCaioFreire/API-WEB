/*
  Warnings:

  - Made the column `user_token` on table `usuarios` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `usuarios` MODIFY `user_token` VARCHAR(128) NOT NULL;
