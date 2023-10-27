/* eslint-disable @typescript-eslint/no-unused-vars */
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { prismaMiddleware } from './middlewares/MultiTenant/MultiTenant';
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(cors());

app.use(router, prismaMiddleware);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message,
        });
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
});

app.listen(8099, () => {
    console.log('Server is running on port 8099');
});