import { Request, Response } from "express";
// import { User } from "../Model/user.model";
import { UserService } from "../services/user.service";

const createUser = async (req: Request, res: Response) => {
    try {

        const userData = req.body
        // const result = await User.create(userData)

        const result = await UserService.createUserIntoDb(userData)
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
const getAllUser = async (_req: Request, res: Response) => {
    try {

        // const userData = req.body
        // const result = await User.create(userData)

        const result = await UserService.getAllUsersFromDb()
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

const getSingleUserById = async (req: Request, res: Response) => {
    try {

        const id = req.params["id"]
        // const result = await User.create(userData)

        const result = await UserService.getUsersByIdFromDb(id as string)
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
export const UserController = { createUser, getAllUser, getSingleUserById }