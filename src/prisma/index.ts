// import { PrismaClient } from "@prisma/client";

// export const prisma = new PrismaClient();

// import { PrismaClient as PrismaClientMain } from "../../prisma/databases/main";
// export const prismaMain = new PrismaClientMain();

import { PrismaClient as PrismaClientAuth } from "../../prisma/databases/auth";
export const prismaAuth = new PrismaClientAuth();

import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

// Função para obter a string de conexão do banco de dados com base na empresa
function getDatabaseConnectionStringForCompany(companyId: string): string {
  const databaseConfig: any = {
    "AUTH": "mysql://root:soft@1973@localhost:3306/bancao?schema=public",
    "B15": "mysql://root:soft@1973@localhost:3306/b15432558000113?schema=public",
    "TESTE": "mysql://root:soft@1973@localhost:3306/teste?schema=public",
  };

  return databaseConfig[companyId];
}

// Função para criar uma instância dinâmica do Prisma Client com base no JWT
export function createPrismaClientFromJWT(token: string): PrismaClient {
  const decoded = jwt.decode(token);
  if (!decoded || typeof decoded !== "object" || !decoded.companyId) {
    throw new Error("Invalid JWT");
  }

  const companyId = decoded.companyId;
  const connectionString = getDatabaseConnectionStringForCompany(companyId);

  return new PrismaClient({
    datasources: {
      db: {
        url: connectionString
      }
    }
  });
}