"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationError = void 0;
const handleValidationError = (err) => {
    const errorValues = Object.values(err.errors);
    const validationIssues = [];
    errorValues.forEach((errorObj) => {
        validationIssues.push({
            path: errorObj.path,
            message: errorObj.message,
            kind: errorObj.kind,
            stack: errorObj.stack
        });
    });
    return {
        message: "Validation Error",
        status: "Failed",
        statusCode: 400,
        issues: validationIssues
    };
};
exports.handleValidationError = handleValidationError;
