import mongoose from "mongoose";
import { TErrorIssues, TErrorResponse } from "../types/TErrorRespose";

export const handleDuplicate = (err: mongoose.Error.ValidationError): TErrorResponse => {


    // errorResponse.statusCode = 409
    // errorResponse.message = "Duplicate Error Found"
    // errorResponse.status = "Failed"
    // errorResponse.issues = [
    //     {
    //         path: "", message: err.message,

    //     }
    // ]
    const duplicationIssues: TErrorIssues[] = [

        {
            path: "",
            message: ""
        }
    ]
    return {
        status: "Error",
        statusCode: 409,
        message: err.message,
        issues: duplicationIssues
    }
}