import { json, NextFunction, Request, Response } from "express"
import jwt, { Jwt, JwtPayload } from 'jsonwebtoken';

export const auth = (...roles: string[]) => {
    console.log(roles)
    return (req: Request, res: Response, next: NextFunction) => {

        try {

            const token = req.headers.authorization
            console.log("Ath Toke", token)

            if (!token) {
                res.send("You are  not allowed")
            }

            const decoded = jwt.verify(token, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30") as JwtPayload
            req.user = decoded
            console.log('D', decoded)

            if (roles.length && !roles.includes(decoded.role)) { }
            next()


        } catch (error) {
            console.log("Error", error)
        }
    }
}