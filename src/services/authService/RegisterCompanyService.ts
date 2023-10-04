import { prismaAuth } from "../../prisma";

interface CompanyData {
  cnpj: string;
  xRazaoSocial: string;
  xFant: string;
  xLgr: string;
  nro: string;
  xCpl: string;
  xBairro: string;
  cMun: string;
  xMun: string;
  uf: string;
  cep: string;
  fone: string;
  ie: string;
  crt: string;
  token: string;
  banco: string;
  status: string;
  email?: string;
};

export class CompanyService {
  async create(data: CompanyData) {
    const existingCompany = await prismaAuth.empresas.findFirst({ where: { cnpj: data.cnpj } });
    prismaAuth.$disconnect();

    if (existingCompany) {
      throw new Error("A empresa com este CNPJ já está registrada.");
    }

    return await (prismaAuth as any).empresas.create({ data });
  }
}
