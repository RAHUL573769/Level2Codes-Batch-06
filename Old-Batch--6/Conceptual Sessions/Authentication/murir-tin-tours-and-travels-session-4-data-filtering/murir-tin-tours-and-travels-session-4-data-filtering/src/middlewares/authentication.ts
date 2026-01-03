/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from "express"
import catchAsyncFunction from "../utils/catchAsync"
import { USER_ROLE } from "../constants/users.conststs"
import jwt, { JwtPayload } from 'jsonwebtoken';
import User from "../models/user.model";

// export const authenticateUser = catchAsyncFunction(async (req: Request, res: Response, next: NextFunction) => {
//     const email = req.body.email
//     const password = req.body.password
//     const user = await User.findOne({ email, password })

//     if (!user) {
//         res.status(403).json({
//             status: "Failed",
//             message: "Ivalid User and Password"
//         })
//     }

//     if (user?.role !== "admin") {
//         res.status(403).json({
//             status: "Failed",
//             message: "You are  not Admin"
//         })

//     }

//     next()
// })

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const checkAuth = (...roles: Array<keyof typeof USER_ROLE>) => {
    return catchAsyncFunction(async (req: Request, res: Response, next: NextFunction) => {
        // const email = req.body.email
        // const password = req.body.password
        // const user1 = await User.findOne({ email })

        // if (!user) {
        //     res.status(403).json({
        //         status: "Failed",
        //         message: "Ivalid User and Password"
        //     })
        // }

        // if (user?.role !== "admin") {
        //     res.status(403).json({
        //         status: "Failed",
        //         message: "You are  not Admin"
        //     })

        // }

        // if (!user?.role || !roles.includes(user.role)) {
        //     res.status(403).json({
        //         status: "Failed",
        //         message: "You are  not Admin"
        //     })

        // }

        const token = req.headers.authorization
        console.log("TOKEN", token)
        if (!token) {
            throw new Error("Invalid tokrn")
        }
        const decodedToken = jwt.verify(token, "qwertyuiop")
        console.log("Devosdes", decodedToken)

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { email1, role } = decodedToken as JwtPayload

        const userAfterDecoded = await User.findOne({ email1 })
        if (!userAfterDecoded) {
            throw new Error("Invalid User")

        }
        if (!roles.includes(userAfterDecoded.role)) {
            throw new Error("You are Unautorized")
        }
        next()
    })
}