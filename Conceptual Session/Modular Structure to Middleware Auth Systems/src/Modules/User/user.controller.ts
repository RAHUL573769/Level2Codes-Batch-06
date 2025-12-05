
import { Request, Response } from "express"

import { UserServices } from "./user.services"
const createUser = async (req: Request, res: Response) => {
    try {

        const result = await UserServices.createUserIntoDb(req.body)
        return res.status(200).json({
            success: true,
            message: "User Created",
            data: result.rows[0]
        })



    } catch (error) {
        return console.log(error)
    }


}

export const UserController = { createUser }
