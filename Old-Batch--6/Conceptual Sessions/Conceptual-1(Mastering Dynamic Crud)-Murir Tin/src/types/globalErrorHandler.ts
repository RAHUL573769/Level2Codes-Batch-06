import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { TErrorResponse } from "./TErrorRespose";
import { handleValidationError } from "../helpers/errorHelpers/handleValidationError";

export const globalErrorHandler: ErrorRequestHandler = (
    err: any,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    console.log("Error:", err);

    let errorResponse: TErrorResponse = {
        status: err.status || "Error",
        statusCode: err.statusCode || 500,
        message: err.message || "Something went wrong",
        issues: err.issues || [],
    };

    // ✅ Mongoose validation error
    if (err instanceof mongoose.Error.ValidationError) {

        errorResponse = handleValidationError(err)
        // errorResponse.statusCode = 400;
        // errorResponse.status = "Error";
        // errorResponse.message = err.message;

        // const errorValues = Object.values(err.errors)
        // errorValues.map((errorObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
        //     errorResponse.issues.push({
        //         path: errorObj.path,
        //         message: errorObj.message

        //     })
        // })
        // errorResponse.issues = Object.values(err.errors).map(el => ({
        //     path: el.path,
        //     message: el.message,
        // }));
    }

    res.status(errorResponse.statusCode).json({
        status: errorResponse.status,
        message: errorResponse.message,
        issues: errorResponse.issues,

    });
};
