/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Response, Request } from "express"
import { authServices } from "./auth.service"
import sendSuccessResponse from "../utils/sendResponse"




const register = async (req: Request, res: Response) => {

    const result = await authServices.register(req.body)
    sendSuccessResponse(res, {
        statusCode: 200,
        data: result,
        message: "Registered Done"
    })
}


const login = async (req: Request, res: Response) => {
    const result = await authServices.login(req.body)
    sendSuccessResponse(res, {
        statusCode: 200,
        data: result,
        message: "Login Done"
    })

}


export const authController = { register, login }