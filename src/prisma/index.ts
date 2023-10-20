/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '../../prisma/databases/main';
import { PrismaClient as PrismaClientAuth } from '../../prisma/databases/auth';
import { Utils_service } from '../services/utilsService/UtilService';



export const prismaAuth = new PrismaClientAuth();

// Função para obter a string de conexão do banco de dados com base na empresa
async function getDatabaseConnectionStringForCompany(companyId: number): Promise<string> { 
    const Company = await prismaAuth.empresas.findUnique({where:{id:companyId}});
    // const databaseConfig: any = {
    //     '0': 'mysql://avelino:Soft1973@192.168.0.126:3306/bancao?schema=public',
    //     '1': 'mysql://avelino:Soft1973@192.168.0.126:3306/b15432558000113?schema=public',
    //     '3': 'mysql://avelino:Soft1973@192.168.0.126:3306/teste?schema=public',
    // };
    const dataBaseConfig = `'mysql://softclever:Soft1973@localhost:3306/${Company?.banco}?schema=public`;
    return dataBaseConfig;
}

export async function createPrismaClientFromJWT(token: string): Promise<PrismaClient> {
    try {
        const utils = new Utils_service();
        const decoded: any = utils.decodeToken(token);

        const companyId = decoded.id_company;
        const connectionString = await getDatabaseConnectionStringForCompany(companyId);

        const prisma = new PrismaClient({
            datasources: {
                db: {
                    url: connectionString
                }
            }
        });

        return prisma;
    } catch (error) {
        throw error;
    }

}
