import { createPrismaClientFromJWT } from '../../prisma';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function prismaMiddleware(req: any, res: any, next: any) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({ error: 'No token provided' });
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
        return res.status(401).send({ error: 'Token error' });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: 'Token malformatted' });
    }

    req.prisma = await createPrismaClientFromJWT(token);
    next();
}
