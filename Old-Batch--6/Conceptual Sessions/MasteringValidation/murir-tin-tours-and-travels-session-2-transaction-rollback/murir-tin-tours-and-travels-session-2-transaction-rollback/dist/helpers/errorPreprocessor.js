"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const errorHelpers_1 = require("./errorHelpers");
const handleDuplicateError_1 = require("./handleDuplicateError");
const handleCastError_1 = require("./handleCastError");
const errorPreprocessor = (err) => {
    // ✅ Validation Error
    if (err instanceof mongoose_1.default.Error.ValidationError) {
        console.log("Validation Error Found");
        return (0, errorHelpers_1.handleValidationError)(err);
    }
    // ✅ Duplicate Key Error
    if (err && err.code === 11000) {
        return (0, handleDuplicateError_1.handleDuplicate)(err);
    }
    // ✅ Cast Error
    if (err instanceof mongoose_1.default.Error.CastError) {
        return (0, handleCastError_1.handleCastError)(err);
    }
    // ✅ Generic JS Error
    if (err instanceof Error) {
        return {
            statusCode: 400,
            status: "Failed",
            message: err.message,
            issues: []
        };
    }
    // ✅ Fallback (Unknown error)
    return {
        statusCode: 500,
        message: "Something went wrong",
        status: "Failed",
        issues: []
    };
};
exports.default = errorPreprocessor;
