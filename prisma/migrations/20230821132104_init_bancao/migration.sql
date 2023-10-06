/*
  Warnings:

  - The primary key for the `usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `excluisvo` on the `usuarios` table. All the data in the column will be lost.
  - You are about to alter the column `nome` on the `usuarios` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(60)`.
  - You are about to alter the column `ultimo_nome` on the `usuarios` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(60)`.
  - You are about to alter the column `email` on the `usuarios` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(150)`.
  - You are about to alter the column `celular` on the `usuarios` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(14)`.
  - You are about to alter the column `status` on the `usuarios` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `Char(1)`.
  - You are about to alter the column `user_token` on the `usuarios` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - A unique constraint covering the columns `[id]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_token]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `usuarios` DROP PRIMARY KEY,
    DROP COLUMN `excluisvo`,
    ADD COLUMN `exclusivo` CHAR(1) NULL DEFAULT 'N',
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `nome` VARCHAR(60) NULL,
    MODIFY `ultimo_nome` VARCHAR(60) NULL,
    MODIFY `email` VARCHAR(150) NULL,
    MODIFY `senha` VARCHAR(250) NULL,
    MODIFY `celular` VARCHAR(14) NULL,
    MODIFY `status` CHAR(1) NULL,
    MODIFY `user_token` VARCHAR(100) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `acoes` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(100) NOT NULL,
    `descricao_titulo` VARCHAR(100) NOT NULL,
    `tabela` VARCHAR(40) NOT NULL,
    `tabela_titulo` VARCHAR(40) NOT NULL,
    `valor_padrao` INTEGER NULL DEFAULT 0,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `acoes_x_grupos` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `id_acao` BIGINT NOT NULL,
    `id_grupo_usuario` BIGINT NOT NULL,
    `permite` INTEGER NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `id_acao`(`id_acao`),
    INDEX `id_grupo_usuario`(`id_grupo_usuario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `empresas` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `cnpj` VARCHAR(18) NOT NULL,
    `xRazaoSocial` VARCHAR(60) NOT NULL,
    `xFant` VARCHAR(60) NOT NULL,
    `xLgr` VARCHAR(60) NOT NULL,
    `nro` VARCHAR(60) NOT NULL,
    `xCpl` VARCHAR(60) NOT NULL,
    `xBairro` VARCHAR(60) NOT NULL,
    `cMun` VARCHAR(7) NOT NULL,
    `xMun` VARCHAR(60) NOT NULL,
    `uf` CHAR(2) NOT NULL,
    `cep` VARCHAR(8) NOT NULL,
    `fone` VARCHAR(14) NOT NULL,
    `ie` VARCHAR(14) NOT NULL,
    `crt` VARCHAR(1) NOT NULL,
    `token` VARCHAR(100) NOT NULL,
    `banco` VARCHAR(100) NOT NULL,
    `status` VARCHAR(1) NOT NULL,
    `email` VARCHAR(129) NULL,

    UNIQUE INDEX `id`(`id`),
    UNIQUE INDEX `token`(`token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `grupos_usuarios` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `id_empresa` BIGINT NOT NULL,
    `pagina_inicial` VARCHAR(20) NOT NULL DEFAULT 'notas-fiscais',

    UNIQUE INDEX `id`(`id`),
    INDEX `id_empresa`(`id_empresa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios_x_empresas` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `id_empresa` BIGINT NOT NULL,
    `id_usuario` BIGINT NOT NULL,
    `id_grupo_usuario` BIGINT NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `id_empresa`(`id_empresa`),
    INDEX `id_grupo_usuario`(`id_grupo_usuario`),
    INDEX `id_usuario`(`id_usuario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `id` ON `usuarios`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `user_token` ON `usuarios`(`user_token`);

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
