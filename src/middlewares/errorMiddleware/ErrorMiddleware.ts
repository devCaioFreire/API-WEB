import { NextFunction, Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import { ErrorResponse } from '../../services/errorService/ErrorService';


export class ErrorMiddleware {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public handle(err: Error, req: Request, res: Response, next: NextFunction) {
        if (err instanceof ErrorResponse)
            return res.status(err.code).json({ message: err.message });

        console.log(err);
        return res.status(500).json({ erro: 'Internal Server Error' });
    }

    public handleAsync =
        (fn: RequestHandler) =>
            (req: Request, res: Response, next: NextFunction) => {
                return Promise.resolve(fn(req, res, next)).catch((err) => next(err));
            };
}