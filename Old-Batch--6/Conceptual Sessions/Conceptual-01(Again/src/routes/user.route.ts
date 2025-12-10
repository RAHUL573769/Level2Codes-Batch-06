import express, { Request, Response } from 'express';
import { data } from '../Miscellinious/data';
const router = express.Router()
router.get("/", (req: Request, res: Response) => {

    res.status(200).json({


        req: req.path,
        message: "User Fetched",
        status: "success",
        data: data,


    })
})
export const UserRouter = router