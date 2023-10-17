import { Request, Response } from 'express';
import { UpdateCoupomStatusService } from '../../services/coupomService/CancelCoupomUpdate';
import { ErrorResponse } from '../../services/errorService/ErrorService';

export class UpdateCoupomStatusController {
    async handle(req: Request, res: Response) {
        const { id, status } = req.body;

        const { authorization } = req.headers;
        if (authorization && typeof authorization !== 'string') throw new ErrorResponse(400, 'Token Invalid Or NotFound');

        const updateCoupomStatusService = new UpdateCoupomStatusService();

        try {
            const result = await updateCoupomStatusService.execute({ id, status }, authorization!);
            return res.json(result);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal server error.' });
        }
    }
}