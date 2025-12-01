import { ServerResponse } from "http";

export const sendResponse = (res: ServerResponse, success: boolean, statusCode: number, message: string, data: any) => {


    const response = {
        message: message,
        statusCode: statusCode,
        data: data
    }

    res.writeHead(statusCode, { "content-type": "application/json" })
    res.end(JSON.stringify(response))
}