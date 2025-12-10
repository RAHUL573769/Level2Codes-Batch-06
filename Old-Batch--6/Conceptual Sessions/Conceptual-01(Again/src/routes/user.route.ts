import express, { Request, Response } from 'express';
import { data } from '../Miscellinious/data';
import { UserController } from '../controller/user.controller';
const router = express.Router()
router.get("/", (req: Request, res: Response) => {

    res.status(200).json({


        req: req.path,
        message: "User Fetched",
        status: "success",
        data: data,


    })
})


router.post("/create-user", UserController.createUser)
export const UserRouter = router