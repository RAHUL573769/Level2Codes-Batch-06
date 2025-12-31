"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericError = void 0;
class GenericError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.GenericError = GenericError;
