"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleValidationError = void 0;
const handleValidationError = (err) => {
    // let validationError: TErrorResponse
    const issues = [];
    const errorValues = Object.values(err.errors);
    errorValues.map((errorObj) => {
        issues.push({
            path: errorObj.path,
            message: errorObj.message
        });
    });
    return { statusCode: 400, status: "Failed", message: "Cannot Create User", issues };
};
exports.handleValidationError = handleValidationError;
//# sourceMappingURL=handleValidationError.js.map