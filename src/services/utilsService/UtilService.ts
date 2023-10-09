import jwt from 'jsonwebtoken';
export class Utils_service {
    decodeToken(token:string){
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
        if (!decoded || !decoded.id_company) {
            throw new Error('Invalid JWT');
        }
        return decoded;
    }
}