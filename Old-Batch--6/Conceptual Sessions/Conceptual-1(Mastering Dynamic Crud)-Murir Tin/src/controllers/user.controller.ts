import { Request, Response } from "express";
import { User } from "../Model/user.model";

const createUser = async (req: Request, res: Response) => {
    try {

        const userData = req.body
        const result = await User.create(userData)
        res.status(200).json({
            data: result
        })

    } catch (error: any) {
        res.status(500).json({
            status: "Failed",
            message: error.message || "Error Found"
        })
        console.log(error)
    }
}

export const UserController = { createUser }