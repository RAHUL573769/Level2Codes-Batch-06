"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorPreprocessor_1 = __importDefault(require("../helpers/errorPreprocessor"));
/* eslint-disable @typescript-eslint/no-explicit-any */
const globalErrorHandler = (err, req, res, next) => {
    let errorResponse = {
        message: err.message || "Something wwent Wrong",
        status: err.status || "Error ",
        statusCode: 400,
        issues: err.issues || []
    };
    // let statusCode = err.statusCode || 500
    // let message = err.message || 'Something went wrong'
    // let status = err.status || 'error'
    console.log(err);
    //   if (err.name && err instanceof mongoose.Error.ValidationError) {
    //   console.log("Ami Validation Error")
    //   errorResponse = handleValidationError(err)
    //   errorResponse.statusCode = 400
    //   errorResponse.message = "Validation Error Found"
    //   errorResponse.status = "Failed"
    //   const errorValues = Object.values(err.errors)
    //   errorValues.map((errorObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
    //     errorResponse.issues.push({
    //       path: errorObj.path,
    //       message: errorObj.message,
    //       kind: errorObj.kind,
    //       stack: errorObj.stack as string
    //     })
    //   })
    //   statusCode = 400
    //   message = "Validation Error Found"
    //   status = "Error"
    //   console.log("Error Values", errorValues)
    //   errorResponse.issues = []
    // } else if (err.code && err.code === 11000) {
    //   errorResponse = handleDuplicate(err)
    // } else if (err instanceof mongoose.Error.CastError) {
    //   errorResponse = handleCastError(err)
    // } else if (err instanceof Error) {
    //   errorResponse.statusCode = 400
    //   errorResponse.message = err.message
    //   errorResponse.status = "Failed"
    // }
    errorResponse = (0, errorPreprocessor_1.default)(err);
    res.status(errorResponse.statusCode).json({
        status: errorResponse.status,
        message: errorResponse.message,
        issues: errorResponse.issues,
        error: err
    });
};
exports.default = globalErrorHandler;
