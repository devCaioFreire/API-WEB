/*
  Warnings:

  - The primary key for the `acoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `acoes` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `acoes_x_grupos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `acoes_x_grupos` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `id_acao` on the `acoes_x_grupos` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `id_grupo_usuario` on the `acoes_x_grupos` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `empresas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `empresas` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `grupos_usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `grupos_usuarios` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `id_empresa` on the `grupos_usuarios` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `usuarios` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `usuarios_x_empresas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `usuarios_x_empresas` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `id_empresa` on the `usuarios_x_empresas` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `id_usuario` on the `usuarios_x_empresas` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `id_grupo_usuario` on the `usuarios_x_empresas` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `acoes_x_grupos` DROP FOREIGN KEY `acoes_x_grupos_ibfk_1`;

-- DropForeignKey
ALTER TABLE `acoes_x_grupos` DROP FOREIGN KEY `acoes_x_grupos_ibfk_2`;

-- DropForeignKey
ALTER TABLE `grupos_usuarios` DROP FOREIGN KEY `grupos_usuarios_ibfk_1`;

-- DropForeignKey
ALTER TABLE `usuarios_x_empresas` DROP FOREIGN KEY `usuarios_x_empresas_ibfk_1`;

-- DropForeignKey
ALTER TABLE `usuarios_x_empresas` DROP FOREIGN KEY `usuarios_x_empresas_ibfk_2`;

-- DropForeignKey
ALTER TABLE `usuarios_x_empresas` DROP FOREIGN KEY `usuarios_x_empresas_ibfk_3`;

-- AlterTable
ALTER TABLE `acoes` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `acoes_x_grupos` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `id_acao` INTEGER NOT NULL,
    MODIFY `id_grupo_usuario` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `empresas` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `grupos_usuarios` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `id_empresa` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `usuarios` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `usuarios_x_empresas` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `id_empresa` INTEGER NOT NULL,
    MODIFY `id_usuario` INTEGER NOT NULL,
    MODIFY `id_grupo_usuario` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `acoes_x_grupos` ADD CONSTRAINT `acoes_x_grupos_ibfk_1` FOREIGN KEY (`id_acao`) REFERENCES `acoes`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `acoes_x_grupos` ADD CONSTRAINT `acoes_x_grupos_ibfk_2` FOREIGN KEY (`id_grupo_usuario`) REFERENCES `grupos_usuarios`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `grupos_usuarios` ADD CONSTRAINT `grupos_usuarios_ibfk_1` FOREIGN KEY (`id_empresa`) REFERENCES `empresas`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `usuarios_x_empresas` ADD CONSTRAINT `usuarios_x_empresas_ibfk_1` FOREIGN KEY (`id_empresa`) REFERENCES `empresas`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `usuarios_x_empresas` ADD CONSTRAINT `usuarios_x_empresas_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `usuarios_x_empresas` ADD CONSTRAINT `usuarios_x_empresas_ibfk_3` FOREIGN KEY (`id_grupo_usuario`) REFERENCES `grupos_usuarios`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
