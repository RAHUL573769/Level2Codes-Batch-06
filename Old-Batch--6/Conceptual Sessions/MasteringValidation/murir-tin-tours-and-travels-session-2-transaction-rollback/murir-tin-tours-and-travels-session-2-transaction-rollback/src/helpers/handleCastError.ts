import mongoose from "mongoose";
import { TErrorIssues, TErrorResponse } from "../types/TErrorRespose";


export const handleCastError = (error: mongoose.Error.CastError): TErrorResponse => {


    const castErrorIssues: TErrorIssues[] = [{
        path: error.path,
        message: error.message,
        stack: error.stack,
        kind: error.kind
    }]
    return {
        statusCode: 406,
        status: "Cast Error Found",
        message: error.message,
        issues: castErrorIssues
    }

}