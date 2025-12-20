import { Response } from "express";



type ISuccessResponse<T> = {
    statusCode: number
    status: "Success" | "Fail" | "Error"
    message: string
    data?: T | null
}

export const sendResponse = <T>(
    res: Response,
    payload: ISuccessResponse<T>
) => {
    res.status(payload.statusCode).json({
        status: payload.status,
        message: payload.message,
        data: payload.data ?? null
    })
}

