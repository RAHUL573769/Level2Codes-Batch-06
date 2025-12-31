import mongoose from "mongoose"
import { TErrorResponse } from "../types/TErrorRespose"
import { handleValidationError } from "./errorHelpers"
import { handleDuplicate } from "./handleDuplicateError"
import { handleCastError } from "./handleCastError"

const errorPreprocessor = (err: any): TErrorResponse => {

    // ✅ Validation Error
    if (err instanceof mongoose.Error.ValidationError) {
        console.log("Validation Error Found")
        return handleValidationError(err)
    }

    // ✅ Duplicate Key Error
    if (err && err.code === 11000) {
        return handleDuplicate(err)
    }

    // ✅ Cast Error
    if (err instanceof mongoose.Error.CastError) {
        return handleCastError(err)
    }

    // ✅ Generic JS Error
    if (err instanceof Error) {
        return {
            statusCode: 400,
            status: "Failed",
            message: err.message,
            issues: []
        }
    }

    // ✅ Fallback (Unknown error)
    return {
        statusCode: 500,
        message: "Something went wrong",
        status: "Failed",
        issues: []
    }
}
export default errorPreprocessor