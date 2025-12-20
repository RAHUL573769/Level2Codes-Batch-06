"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const handleValidationError_1 = require("../helpers/errorHelpers/handleValidationError");
const globalErrorHandler = (err, _req, res, _next) => {
    console.log("Error:", err);
    let errorResponse = {
        status: err.status || "Error",
        statusCode: err.statusCode || 500,
        message: err.message || "Something went wrong",
        issues: err.issues || [],
    };
    // ✅ Mongoose validation error
    if (err instanceof mongoose_1.default.Error.ValidationError) {
        errorResponse = (0, handleValidationError_1.handleValidationError)(err);
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
exports.globalErrorHandler = globalErrorHandler;
//# sourceMappingURL=globalErrorHandler.js.map