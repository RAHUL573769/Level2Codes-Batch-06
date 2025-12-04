import { Request, Response } from "express";
import { pool } from "../database/database";
import { UserServices } from "../services/user.service";

const createUsers = async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body;
    // console.log("Password", password)
    try {
        const result = UserServices.createUserIntoDb(name, email, password, role)

        return res.status(200).json({
            success: true,
            data: (await result).rows[0],
        });

    } catch (error: any) {
        console.log(error);

        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}
const getUsers = async (req: Request, res: Response) => {
    try {
        const result = await UserServices.getUsersFromDb(req.params.id)

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            data: result.rows[0]
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: "Server error" });
    }
}
export const UserController = {
    createUsers, getUsers

}