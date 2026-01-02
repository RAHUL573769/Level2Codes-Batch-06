import { NextFunction, Request, Response } from "express";
import { Role } from "../generated/prisma/enums";

const auth = (role?: Role[]) => {

    return (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization?.split(" ")[1]

        if (!token) {
            res.send("Please Provide Token")
        }

        try {

        } catch (error) {

        }
    }
}