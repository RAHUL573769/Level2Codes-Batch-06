import mongoose from "mongoose"
import { TErrorIssues, TErrorResponse } from "../types/TErrorRespose"

export const handleValidationError = (
    err: mongoose.Error.ValidationError
): TErrorResponse => {

    const errorValues = Object.values(err.errors)


    const validationIssues: TErrorIssues[] = []
    errorValues.forEach((errorObj) => {


        validationIssues.push({
            path: errorObj.path,
            message: errorObj.message,
            kind: errorObj.kind,
            stack: errorObj.stack as string
        })
    })

    return {
        message: "Validation Error",
        status: "Failed",
        statusCode: 400,
        issues: validationIssues



    }

}



