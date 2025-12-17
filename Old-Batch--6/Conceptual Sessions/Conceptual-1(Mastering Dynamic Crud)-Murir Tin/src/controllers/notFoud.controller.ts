import { Request, Response } from "express";



const notFound = (req: Request, res: Response) => {

    res.status(200).json({

        status: "Failed",
        path: req.path,
    })
}


export const notFoundController = notFound