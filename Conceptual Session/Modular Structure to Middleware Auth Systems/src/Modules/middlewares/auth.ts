import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from 'jsonwebtoken';

export const auth = (...roles: string[]) => {

    // console.log(roles)
    return async (req: Request, res: Response, next: NextFunction) => {


        try {
            const token = req.headers.authorization
            // console.log("Auth-Token", token)

            if (!token) {
                res.send("You are  not allowed")
            }

            const decoded = jwt.verify(token as string, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30") as JwtPayload

            console.log("Decoded", decoded)
            req.user = decoded
            console.log('D', decoded)
            console.log('D1', req.user)


            // if (roles.length && !roles.includes(decoded.role)) { }
            next();

        } catch (error) {
            console.log(error)
        }

    }
}