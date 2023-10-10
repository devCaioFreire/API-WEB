/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient as PrismaClientAuth } from '../../prisma/databases/auth';
import { PrismaClient } from '../../prisma/databases/main';
import { Utils_service } from '../services/utilsService/UtilService';

export const prismaAuth = new PrismaClientAuth();

// Função para obter a string de conexão do banco de dados com base na empresa
function getDatabaseConnectionStringForCompany(companyId: string): string {
    const databaseConfig: any = {
        '0': 'mysql://root:soft@1973@localhost:3306/bancao?schema=public',
        '1': 'mysql://root:soft@1973@localhost:3306/b15432558000113?schema=public',
        '3': 'mysql://root:soft@1973@localhost:3306/teste?schema=public',
    };
    return databaseConfig[companyId];
}

export function createPrismaClientFromJWT(token: string): PrismaClient {
    const utils = new Utils_service();
    const decoded: any = utils.decodeToken(token);

    const companyId = decoded.id_company;
    const connectionString = getDatabaseConnectionStringForCompany(companyId);

    const prisma = new PrismaClient({
        datasources: {
            db: {
                url: connectionString
            }
        }
    });

    return prisma;
}
