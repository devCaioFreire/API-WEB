import { Request, Response } from "express";
import { CancelCoupomService } from "../../services/coupomService/CancelCoupomService";
import { ErrorResponse } from "../../services/errorService/ErrorService";

export class CancelCoupomController {
  async handle(req: Request, res: Response) {
    const {
      id,
      cpf_cnpj,
      valor_liquido,
      data_criacao,
    } = req.body;
    const {authorization} = req.headers;
    if( authorization && typeof authorization !== 'string' )throw new ErrorResponse(400,'Token Invalid Or NotFound');
    const createCancelCoupomService = new CancelCoupomService();
    const cancelCoupom = await createCancelCoupomService.
    execute(
      {
        id,
        cpf_cnpj,
        valor_liquido,
        data_criacao
      },
      authorization!
    );

    return res.json(cancelCoupom);
  }
}

