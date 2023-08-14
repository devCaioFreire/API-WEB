import { Request, Response } from "express";
import { CancelCoupomService } from "../../services/coupomService/CancelCoupomService";

export class CancelCoupomController {
  async handle(req: Request, res: Response) {
    const {
      id,
      cpf_cnpj,
      valor_liquido,
      data_criacao
    } = req.body;
    const createCancelCoupomService = new CancelCoupomService();
    const cancelCoupom = await createCancelCoupomService.execute(
      {
        id,
        cpf_cnpj,
        valor_liquido,
        data_criacao
      }
    );

    return res.json(cancelCoupom);
  }
}

