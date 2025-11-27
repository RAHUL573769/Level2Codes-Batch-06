import express, { Request, Response } from 'express';
import { UserController } from '../controllers/user.controller';
const router = express.Router()

router.get("/", (_req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome To Murir Tin",
        status: "success",
    });
});
router.get("/user", UserController.getAllUser)
router.get("/:id", UserController.getSingleUserById)

router.post("/create-user", UserController.createUser)



export const userRouter = router