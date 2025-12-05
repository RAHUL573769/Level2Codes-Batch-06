

import { Request, Response, NextFunction } from "express";


export const verify = (_req: Request, _res: Response, next: NextFunction) => {
    console.log("Wait ID nichen")

    // console.log(req, res, next)
    // console.log(req, res, next)

    // if (!ID) {
    //     throw new Error("Not Allowed")
    // }
    next()
}
