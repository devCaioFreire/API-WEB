import { Request, Response } from "express";
import { CompanyService } from "../../services/authService/RegisterCompanyService";

export class CompanyController {
  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const companyService = new CompanyService();
      const company = await companyService.create(data);
      return res.status(201).json(company);
    } catch (err) {
      console.error("Erro ao criar a empresa: " + err);
      return res.status(500).json({ error: "Erro ao criar a empresa", details: err });
    }
  }
}
