import { Request, Response } from "express"
// import User from "../models/user.model"
import { UserServices } from "../service/user.service"
import IUser from "../interface/user.interface"
import User from "../models/user.model"

const createUser = async (req: Request, res: Response) => {

    try {

        const data = req.body
        const result = await UserServices.createUserIntoDb(data)

        res.status(200).json({
            status: "success",
            message: "User Created",
            data: result
        })

    } catch (error: any) {
        res.status(500).json({
            status: "fail",
            message: error.message || "Something Went Wrong"
        })
    }

}
const getAllUser = async (): Promise<IUser[]> => {

    try {
        const result = await User.find()
        return result

    } catch (error) {
        throw error
    }
}
const getSingleUser = async (id: string): Promise<IUser | null> => {


    try {
        const result = await User.findById(id)
        return result
    } catch (error) {
        throw error
    }
}

const updateUser = async (id: string, userData: IUser) => {

    const result = await User.findByIdAndUpdate(id, userData, { new: true, runValidators: true })
    return result

}
export const UserController = { updateUser, createUser, getAllUser, getSingleUser }