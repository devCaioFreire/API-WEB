/*
  Warnings:

  - You are about to drop the `acoes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `acoes_x_grupos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `empresas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `grupos_usuarios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuarios_x_empresas` table. If the table is not empty, all the data it contains will be lost.

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

-- DropTable
DROP TABLE `acoes`;

-- DropTable
DROP TABLE `acoes_x_grupos`;

-- DropTable
DROP TABLE `empresas`;

-- DropTable
DROP TABLE `grupos_usuarios`;

-- DropTable
DROP TABLE `usuarios`;

-- DropTable
DROP TABLE `usuarios_x_empresas`;

-- CreateTable
CREATE TABLE `pedidos_venda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` INTEGER NULL,
    `vendedor_id` INTEGER NULL,
    `vendedor_nome` VARCHAR(191) NULL,
    `vendedor_id_sirius` INTEGER NULL,
    `cliente_id` INTEGER NULL,
    `cliente_nome` VARCHAR(191) NULL,
    `cliente_id_sirius` INTEGER NULL,
    `usuario_id` INTEGER NULL,
    `desconto` DOUBLE NULL,
    `valor_bruto` DOUBLE NULL,
    `valor_liquido` DOUBLE NULL,
    `forma_pagamento` VARCHAR(191) NULL,
    `pagamento` DOUBLE NULL,
    `troco` DOUBLE NULL,
    `status` VARCHAR(1) NULL,
    `cpf_cnpj` VARCHAR(191) NULL,
    `observacoes` VARCHAR(191) NULL,
    `data_criacao` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `cliente_contato` VARCHAR(191) NULL,
    `data_realizacao` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `data_sincronizacao` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `condicao_pagamento_id` INTEGER NULL,
    `entrega_cep` VARCHAR(191) NULL,
    `entrega_logradouro` VARCHAR(191) NULL,
    `entrega_numero` VARCHAR(191) NULL,
    `entrega_complemento` VARCHAR(191) NULL,
    `entrega_bairro` VARCHAR(191) NULL,
    `entrega_cidade` VARCHAR(191) NULL,
    `entrega_uf` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedidos_venda_itens` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pedido_id` INTEGER NOT NULL,
    `produto_id` INTEGER NOT NULL,
    `produto_sirius_id` INTEGER NULL,
    `descricao` VARCHAR(191) NULL,
    `unidade` VARCHAR(191) NULL,
    `quantidade` INTEGER NULL,
    `valor_unitario` DOUBLE NULL,
    `valor_total` DOUBLE NULL,
    `ean` VARCHAR(191) NULL,
    `codigo` VARCHAR(191) NULL,

    INDEX `pedidos_venda_itens_pedido_id_fkey`(`pedido_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produtos_movimentacoes` (
    `pm_id` INTEGER NOT NULL AUTO_INCREMENT,
    `pm_pedido_venda_id` INTEGER NULL,
    `pm_produto_id` INTEGER NOT NULL,
    `pm_usuario_id` INTEGER NOT NULL,
    `pm_saldo_anterior` FLOAT NULL,
    `pm_saldo_atual` FLOAT NULL,
    `pm_quantidade` FLOAT NOT NULL,
    `pm_tipo_movimentacao` VARCHAR(191) NOT NULL,
    `pm_data_hora` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `pm_numero_nota_fiscal` INTEGER NULL,
    `pm_observacao` VARCHAR(191) NULL,

    INDEX `pm_pedido_venda_id`(`pm_pedido_venda_id`),
    INDEX `pm_produto_id`(`pm_produto_id`),
    PRIMARY KEY (`pm_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `certificado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `senhaCert` VARCHAR(15) NULL,
    `serieCert` VARCHAR(30) NULL,
    `nomeCert` VARCHAR(30) NULL,
    `pathCert` VARCHAR(250) NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clientes` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `id_sirius` BIGINT NULL,
    `status` VARCHAR(1) NOT NULL,
    `dataFoiCadastrado` DATETIME(6) NOT NULL,
    `dataUltimaAtualizacao` DATETIME(6) NOT NULL,
    `razaoSocial` VARCHAR(60) NOT NULL,
    `fantasia` VARCHAR(60) NULL,
    `cpf` VARCHAR(11) NOT NULL,
    `cnpj` VARCHAR(14) NOT NULL,
    `idEstrangeiro` VARCHAR(20) NULL,
    `indIE` VARCHAR(1) NULL,
    `inscEstadual` VARCHAR(14) NULL,
    `inscMunicipal` VARCHAR(15) NULL,
    `tipoCliente` CHAR(1) NOT NULL,
    `exclusivo` INTEGER NULL DEFAULT 0,
    `vendedor_id` BIGINT NULL DEFAULT 0,
    `vendedor_id_sirius` BIGINT NULL DEFAULT 0,
    `vendedor_nome` VARCHAR(30) NULL,
    `lista_preco_id` BIGINT NULL DEFAULT 0,
    `lista_preco_nome` VARCHAR(30) NULL,
    `condicao_pagamento_id` BIGINT NULL,
    `contato` VARCHAR(60) NULL,
    `contato_nome` VARCHAR(60) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clientes_x_produtos` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `valor` DECIMAL(15, 2) NOT NULL,
    `cliente_id` BIGINT NOT NULL,
    `cliente_id_sirius` BIGINT NULL,
    `produto_id` BIGINT NOT NULL,
    `produto_id_sirius` BIGINT NULL,
    `produto_cod` VARCHAR(60) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `condicoes_pagamento` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `id_sirius` BIGINT NULL,
    `descricao` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contatos` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `contato` VARCHAR(60) NOT NULL,
    `tipoContato` VARCHAR(1) NOT NULL,
    `cliente_id` BIGINT NOT NULL,

    INDEX `cliente_id`(`cliente_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `docreferenciado` (
    `idDocReferenciado` INTEGER NOT NULL AUTO_INCREMENT,
    `notaFiscal_id` BIGINT NULL,
    `tipoDoc` VARCHAR(60) NULL,
    `chave` VARCHAR(47) NULL,

    INDEX `notaFiscal_id`(`notaFiscal_id`),
    PRIMARY KEY (`idDocReferenciado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enderecos` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `cep` VARCHAR(8) NOT NULL,
    `logradouro` VARCHAR(60) NOT NULL,
    `numero` VARCHAR(8) NOT NULL,
    `complemento` VARCHAR(60) NOT NULL,
    `bairro` VARCHAR(60) NOT NULL,
    `cidade` VARCHAR(60) NOT NULL,
    `codMun` VARCHAR(7) NOT NULL,
    `codUF` VARCHAR(2) NOT NULL,
    `uf` VARCHAR(2) NOT NULL,
    `cliente_id` BIGINT NOT NULL,
    `tipoEndereco` VARCHAR(1) NOT NULL,
    `status` CHAR(1) NULL DEFAULT 'A',

    INDEX `cliente_id`(`cliente_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fornecedores` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `fantasia` VARCHAR(80) NULL,
    `razaoSocial` VARCHAR(80) NOT NULL,
    `status` CHAR(1) NULL,
    `cpfCnpj` VARCHAR(14) NULL,
    `tipo` CHAR(1) NULL,
    `inscEstadual` VARCHAR(80) NULL,
    `cep` VARCHAR(80) NULL,
    `logradouro` VARCHAR(80) NULL,
    `numero` INTEGER NULL,
    `complemento` VARCHAR(80) NULL,
    `bairro` VARCHAR(80) NULL,
    `cidade` VARCHAR(80) NULL,
    `uf` CHAR(2) NULL,
    `email` VARCHAR(80) NULL,
    `celular` VARCHAR(80) NULL,
    `telefone` VARCHAR(80) NULL,
    `fax` VARCHAR(80) NULL,
    `pessoaContato` VARCHAR(80) NULL,
    `observacoes` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `listas_precos` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(100) NOT NULL,
    `id_sirius` BIGINT NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `listas_precos_x_produtos` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `lista_id` BIGINT NULL DEFAULT 0,
    `produto_id` BIGINT NULL DEFAULT 0,
    `produto_desc` VARCHAR(120) NULL,
    `valor` DECIMAL(15, 2) NULL DEFAULT 0.00,
    `id_sirius` BIGINT NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nfeconfig` (
    `idnfeconfig` INTEGER NOT NULL AUTO_INCREMENT,
    `tpAmb` CHAR(1) NULL,
    `tpImp` CHAR(1) NULL,

    PRIMARY KEY (`idnfeconfig`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notafiscal` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `versao` VARCHAR(4) NOT NULL,
    `chave` VARCHAR(47) NULL,
    `status` VARCHAR(20) NULL,
    `cUf` VARCHAR(2) NOT NULL,
    `cNf` VARCHAR(8) NOT NULL,
    `natOp` VARCHAR(60) NOT NULL,
    `modelo` VARCHAR(2) NOT NULL,
    `serie` VARCHAR(3) NOT NULL,
    `nNf` INTEGER NOT NULL,
    `dhEmi` DATETIME(0) NOT NULL,
    `tpNf` VARCHAR(1) NOT NULL,
    `idDest` VARCHAR(1) NOT NULL,
    `cMunFG` VARCHAR(7) NOT NULL,
    `tpImp` VARCHAR(1) NOT NULL,
    `tpEmis` VARCHAR(1) NOT NULL,
    `cDV` VARCHAR(1) NOT NULL,
    `tpAmb` VARCHAR(1) NOT NULL,
    `finNfe` VARCHAR(1) NOT NULL,
    `indFinal` VARCHAR(1) NOT NULL,
    `indPres` VARCHAR(1) NOT NULL,
    `procEmi` VARCHAR(1) NOT NULL,
    `verProc` VARCHAR(20) NOT NULL,
    `vBC` DECIMAL(15, 2) NULL,
    `vICMS` DECIMAL(15, 2) NULL,
    `vICMSDeson` DECIMAL(15, 2) NULL,
    `vFCP` DECIMAL(15, 2) NULL,
    `vBCST` DECIMAL(15, 2) NULL,
    `vST` DECIMAL(15, 2) NULL,
    `vFCPST` DECIMAL(15, 2) NULL,
    `vFCPSTRet` DECIMAL(15, 2) NULL,
    `vProd` DECIMAL(15, 2) NULL,
    `vFrete` DECIMAL(15, 2) NULL,
    `vDesc` DECIMAL(15, 2) NULL,
    `vII` DECIMAL(15, 2) NULL,
    `vIPI` DECIMAL(15, 2) NULL,
    `vIPIDevol` DECIMAL(15, 2) NULL,
    `vPIS` DECIMAL(15, 2) NULL,
    `vCOFINS` DECIMAL(15, 2) NULL,
    `vOutro` DECIMAL(15, 2) NULL,
    `vNF` DECIMAL(15, 2) NULL,
    `vTotTrib` DECIMAL(15, 2) NULL,
    `modFrete` VARCHAR(1) NULL,
    `emitCnpjcpf` VARCHAR(14) NULL,
    `emitxNome` VARCHAR(60) NULL,
    `enderEmitxLgr` VARCHAR(60) NULL,
    `enderEmitNro` VARCHAR(60) NULL,
    `enderEmitxCpl` VARCHAR(60) NULL,
    `enderEmitxBairro` VARCHAR(60) NULL,
    `enderEmitcMun` VARCHAR(7) NULL,
    `enderEmitxMun` VARCHAR(60) NULL,
    `enderEmitUF` VARCHAR(2) NULL,
    `enderEmitCEP` VARCHAR(8) NULL,
    `enderEmitFone` VARCHAR(14) NULL,
    `enderEmitIE` VARCHAR(14) NULL,
    `emitCrt` VARCHAR(1) NULL,
    `destCNPJCPF` VARCHAR(14) NULL,
    `destIdEstrangeiro` VARCHAR(20) NULL,
    `destxNome` VARCHAR(60) NULL,
    `destIE` VARCHAR(14) NULL,
    `destEmail` VARCHAR(250) NULL,
    `destFone` VARCHAR(14) NULL,
    `cliente_id` BIGINT NULL,
    `enderDestxLgr` VARCHAR(60) NULL,
    `enderDestnro` VARCHAR(60) NULL,
    `enderDestxCpl` VARCHAR(60) NULL,
    `enderDestxBairro` VARCHAR(60) NULL,
    `enderDestcMun` VARCHAR(7) NULL,
    `enderDestxMun` VARCHAR(60) NULL,
    `enderDestUF` VARCHAR(2) NULL,
    `enderDestCep` VARCHAR(8) NULL,
    `enderDestFone` VARCHAR(14) NULL,
    `endereco_id` BIGINT NULL,
    `indIEDest` VARCHAR(1) NULL,
    `emitInscEstadual` VARCHAR(14) NULL,
    `xml` BLOB NULL,
    `protocolo` VARCHAR(20) NULL,
    `dhRecbto` DATETIME(0) NULL,
    `infCpl` BLOB NULL,
    `infAdFisco` BLOB NULL,
    `statusCode` INTEGER NULL,
    `xMotivo` VARCHAR(60) NULL,
    `retWS` BLOB NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `cliente_id`(`cliente_id`),
    INDEX `endereco_id`(`endereco_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notafiscalitem` (
    `id` INTEGER NOT NULL,
    `cProd` VARCHAR(60) NOT NULL,
    `cEAN` VARCHAR(14) NOT NULL,
    `xProd` VARCHAR(120) NOT NULL,
    `ncm` VARCHAR(8) NOT NULL,
    `cest` VARCHAR(7) NOT NULL,
    `cfop` VARCHAR(4) NOT NULL,
    `uCom` VARCHAR(6) NOT NULL,
    `qCom` DECIMAL(15, 4) NOT NULL,
    `vUnCom` DECIMAL(21, 10) NOT NULL,
    `vProd` DECIMAL(15, 2) NULL,
    `cEANTrib` VARCHAR(14) NOT NULL,
    `uTrib` VARCHAR(6) NOT NULL,
    `qTrib` DECIMAL(15, 4) NOT NULL,
    `indTotal` VARCHAR(1) NOT NULL,
    `cst` VARCHAR(3) NOT NULL,
    `modBc` VARCHAR(1) NULL,
    `vBc` DECIMAL(15, 2) NULL,
    `pIcms` DECIMAL(7, 4) NULL,
    `vIcms` DECIMAL(15, 2) NULL,
    `pFcp` DECIMAL(7, 4) NULL,
    `vFcp` DECIMAL(15, 2) NULL,
    `vBCFCP` DECIMAL(15, 2) NULL,
    `modBCST` VARCHAR(1) NULL,
    `vBCST` DECIMAL(15, 2) NULL,
    `pICMSST` DECIMAL(7, 4) NULL,
    `vICMSST` DECIMAL(15, 2) NULL,
    `vBCFCPST` DECIMAL(15, 2) NULL,
    `pFCPST` DECIMAL(7, 4) NULL,
    `vFCPST` DECIMAL(15, 2) NULL,
    `pRedBC` DECIMAL(7, 4) NULL,
    `vICMSDeson` DECIMAL(15, 2) NULL,
    `motDesICMS` VARCHAR(2) NULL,
    `vBCSTRet` DECIMAL(15, 2) NULL,
    `orig` VARCHAR(1) NOT NULL,
    `pST` DECIMAL(7, 4) NULL,
    `vICMSSTRet` DECIMAL(15, 2) NULL,
    `vBCFCPSTRet` DECIMAL(15, 2) NULL,
    `pFCPSTRet` DECIMAL(7, 4) NULL,
    `vFCPSTRet` DECIMAL(15, 2) NULL,
    `pRedBCEfet` DECIMAL(7, 4) NULL,
    `vBCEfet` DECIMAL(15, 2) NULL,
    `pICMSEfet` DECIMAL(7, 4) NULL,
    `vICMSEfet` DECIMAL(15, 2) NULL,
    `pBCOp` DECIMAL(7, 4) NULL,
    `UFST` VARCHAR(2) NULL,
    `CSOSN` VARCHAR(3) NULL,
    `pCredSN` DECIMAL(7, 4) NULL,
    `vCredICMSSN` DECIMAL(15, 2) NULL,
    `notafiscal_id` INTEGER NOT NULL,
    `vUnTrib` DECIMAL(21, 10) NULL,
    `produto_id` INTEGER NULL,
    `vFrete` DECIMAL(15, 2) NULL,
    `vOutro` DECIMAL(15, 2) NULL,
    `vDesc` DECIMAL(15, 2) NULL,
    `cstPIS` CHAR(2) NULL,
    `vBCPIS` DECIMAL(15, 2) NULL,
    `pPIS` DECIMAL(7, 4) NULL,
    `vPIS` DECIMAL(15, 2) NULL,
    `qBCPISProd` DECIMAL(16, 4) NULL,
    `vAliqPISProd` DECIMAL(15, 4) NULL,
    `cstCOFINS` CHAR(2) NULL,
    `vBCCOFINS` DECIMAL(15, 2) NULL,
    `pCOFINS` DECIMAL(7, 4) NULL,
    `vCOFINS` DECIMAL(15, 2) NULL,
    `qBCCOFINSProd` DECIMAL(16, 4) NULL,
    `vAliqCOFINSProd` DECIMAL(15, 4) NULL,
    `pDevol` DECIMAL(5, 2) NULL,
    `vIPIDevol` DECIMAL(15, 2) NULL,
    `pRedBCST` DECIMAL(7, 4) NULL,
    `pMVAST` DECIMAL(7, 4) NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `notafiscal_id`(`notafiscal_id`),
    INDEX `produto_id`(`produto_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notafiscalpagamentos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `indicacao` VARCHAR(1) NULL,
    `tipo` VARCHAR(2) NULL,
    `valor` DECIMAL(15, 2) NULL,
    `data_criacao` DATETIME(0) NULL,
    `data_vencimento` DATETIME(0) NULL,
    `notaFiscal_id` BIGINT NOT NULL,

    INDEX `notaFiscal_id`(`notaFiscal_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedido_compra_itens` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `produto_id` BIGINT NOT NULL,
    `pedido_id` BIGINT NOT NULL,
    `unidade` VARCHAR(20) NULL,
    `complemento_descricao` VARCHAR(30) NULL,
    `observacoes` VARCHAR(30) NULL,
    `quantidade` INTEGER NOT NULL,
    `valor_unitario` DECIMAL(15, 2) NOT NULL,
    `valor_total` DECIMAL(15, 2) NULL,
    `produto_descricao` VARCHAR(120) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedido_compra_pagamentos` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `pedido_id` BIGINT NOT NULL,
    `data_criacao` DATETIME(0) NOT NULL,
    `data_vencimento` DATETIME(0) NULL,
    `forma_pagamento` VARCHAR(2) NULL,
    `valor` DECIMAL(15, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedidos_compra` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `fornecedor_id` BIGINT NOT NULL,
    `status` VARCHAR(1) NOT NULL,
    `data_criacao` DATETIME(0) NOT NULL,
    `data_emissao` DATETIME(0) NOT NULL,
    `data_realizado` DATETIME(0) NULL,
    `forma_pagamento` VARCHAR(2) NULL,
    `valor_total` DECIMAL(15, 2) NULL,
    `num_pedido_venda` VARCHAR(30) NULL,
    `num_nf` VARCHAR(30) NULL,
    `descricao` VARCHAR(100) NULL,
    `observacoes` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedidos_venda_pagamentos` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `pedido_id` BIGINT NULL,
    `forma_pagamento` VARCHAR(2) NOT NULL,
    `valor` DECIMAL(15, 2) NOT NULL,
    `data_criacao` DATETIME(0) NOT NULL,
    `data_vencimento` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produtos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_sirius` INTEGER NULL,
    `codProduto` VARCHAR(60) NOT NULL,
    `descricao` VARCHAR(120) NOT NULL,
    `codEAN` VARCHAR(14) NOT NULL,
    `ncm` VARCHAR(8) NOT NULL,
    `cfop` VARCHAR(4) NOT NULL,
    `unCom` VARCHAR(6) NULL,
    `qtdCom` FLOAT NULL,
    `vlrUnCom` FLOAT NULL,
    `vlrProd` FLOAT NULL,
    `codEANTrib` VARCHAR(14) NULL,
    `unTrib` VARCHAR(6) NULL,
    `qtdTrib` FLOAT NULL,
    `vlrUnTrib` FLOAT NULL,
    `saldo` FLOAT NOT NULL,
    `status` VARCHAR(1) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vendedores` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `id_sirius` BIGINT NULL,
    `nome` VARCHAR(80) NOT NULL,
    `apelido` VARCHAR(80) NULL,
    `status` CHAR(1) NOT NULL,
    `cpf` VARCHAR(14) NULL,
    `cnpj` VARCHAR(18) NULL,
    `inscEstadual` VARCHAR(15) NULL,
    `rg` VARCHAR(12) NULL,
    `telefone` VARCHAR(21) NULL,
    `celular` VARCHAR(20) NULL,
    `email` VARCHAR(80) NULL,
    `fax` VARCHAR(80) NULL,
    `pessoaContato` VARCHAR(80) NULL,
    `cep` VARCHAR(10) NULL,
    `logradouro` VARCHAR(80) NULL,
    `numero` INTEGER NULL,
    `complemento` VARCHAR(80) NULL,
    `bairro` VARCHAR(80) NULL,
    `regiao` VARCHAR(80) NULL,
    `cidade` VARCHAR(80) NULL,
    `uf` CHAR(2) NULL,
    `departamento` VARCHAR(80) NULL,
    `porcComissao` DECIMAL(7, 4) NULL,
    `porcDescMax` DECIMAL(7, 4) NULL,
    `nomeBanco` VARCHAR(80) NULL,
    `numeroBanco` VARCHAR(80) NULL,
    `agencia` VARCHAR(80) NULL,
    `digitoAgencia` VARCHAR(80) NULL,
    `conta` VARCHAR(80) NULL,
    `digitoConta` VARCHAR(80) NULL,
    `observacoes` VARCHAR(255) NULL,
    `idUser` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vendedores_x_usuarios` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `id_usuario` BIGINT NULL,
    `id_vendedor` BIGINT NULL,
    `id_vendedor_sirius` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pedidos_venda_itens` ADD CONSTRAINT `pedidos_venda_itens_pedido_id_fkey` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos_venda`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtos_movimentacoes` ADD CONSTRAINT `produtos_movimentacoes_ibfk_1` FOREIGN KEY (`pm_pedido_venda_id`) REFERENCES `pedidos_venda`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `produtos_movimentacoes` ADD CONSTRAINT `produtos_movimentacoes_ibfk_2` FOREIGN KEY (`pm_produto_id`) REFERENCES `produtos`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `contatos` ADD CONSTRAINT `contatos_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `clientes`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `docreferenciado` ADD CONSTRAINT `docreferenciado_ibfk_1` FOREIGN KEY (`notaFiscal_id`) REFERENCES `notafiscal`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `enderecos` ADD CONSTRAINT `enderecos_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `clientes`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `notafiscal` ADD CONSTRAINT `notafiscal_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `clientes`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `notafiscal` ADD CONSTRAINT `notafiscal_ibfk_2` FOREIGN KEY (`endereco_id`) REFERENCES `enderecos`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `notafiscalpagamentos` ADD CONSTRAINT `notafiscalpagamentos_ibfk_1` FOREIGN KEY (`notaFiscal_id`) REFERENCES `notafiscal`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
