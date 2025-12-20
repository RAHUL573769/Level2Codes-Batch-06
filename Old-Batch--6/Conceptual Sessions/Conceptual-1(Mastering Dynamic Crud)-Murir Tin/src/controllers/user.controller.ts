import { NextFunction, Request, Response } from "express";
// import { User } from "../Model/user.model";
import { UserService } from "../services/user.service";
import { sendResponse } from "../types/utils";


const catchAsync =
    (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
        (req: Request, res: Response, next: NextFunction) => {
            Promise.resolve(fn(req, res, next)).catch(next);
        };



const createUser = catchAsync(
    async (req: Request, res: Response) => {

        const userData = req.body;

        const result = await UserService.createUserIntoDb(userData);

        sendResponse(res, {
            statusCode: 201,
            status: "Success",
            message: "User Created Successfully",
            data: result
        });
    }
);

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