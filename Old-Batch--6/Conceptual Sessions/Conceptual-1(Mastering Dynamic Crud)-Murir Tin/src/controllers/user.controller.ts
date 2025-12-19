import { NextFunction, Request, Response } from "express";
// import { User } from "../Model/user.model";
import { UserService } from "../services/user.service";


type ISuccessResponse<T> = {
    statusCode: number
    status: "Success" | "Fail" | "Error"
    message: string
    data?: T | null
}

const sendResponse = <T>(
    res: Response,
    payload: ISuccessResponse<T>
) => {
    res.status(payload.statusCode).json({
        status: payload.status,
        message: payload.message,
        data: payload.data ?? null
    })
}



const createUser = async (req: Request, res: Response) => {
    try {

        const userData = req.body
        // const result = await User.create(userData)

        const result = await UserService.createUserIntoDb(userData)

        sendResponse(res, {
            statusCode: 201,
            status: "Success",
            message: "User Created Successfully",
            data: result
        })
        // res.status(200).json({
        //     data: result
        // })

    } catch (error: any) {
        res.status(500).json({
            status: "Failed",
            message: error.message || "Error Found"
        })
        console.log(error)
    }
}
const getAllUser = async (_req: Request, res: Response, next: NextFunction) => {
    try {

        // const userData = req.body
        // const result = await User.create(userData)

        const result = await UserService.getAllUsersFromDb()

        throw new Error("Somethinf")
        res.status(200).json({
            data: result
        })

    } catch (error: any) {
        // res.status(500).json({
        //     status: "Failed",
        //     message: error.message || "Error Found"
        // })
        next(error)
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