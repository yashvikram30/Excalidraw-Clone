import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { JWT_SECRET } from "@repo/backend-common/config";
dotenv.config();

const secret = JWT_SECRET;

export function authMiddleware(req: Request, res: Response, next: NextFunction){

    const token = req.headers["authorization"];
    if(!token){
        res.json({
            message : "Token not found"
        })
        return;
    }
    const decodedUser = jwt.verify(token, secret);
    if(!decodedUser){
        res.json({
            message : "Invalid JWT"
        })
        return;
    }

    // @ts-ignore
    req.userId = decodedUser.userId;
    next();


}