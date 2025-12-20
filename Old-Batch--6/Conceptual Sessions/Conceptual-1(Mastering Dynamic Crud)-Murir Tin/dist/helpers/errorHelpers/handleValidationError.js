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
    return { statusCode: 400, status: "Failed", message: "Failed", issues };
};
exports.handleValidationError = handleValidationError;
// import mongoose from 'mongoose'
// import { TErrorIssue, TErrorResponse } from '../../types/TErrorResponse'
// const handleValidationError = (
//   err: mongoose.Error.ValidationError,
// ): TErrorResponse => {
//   const errorValues = Object.values(err.errors)
//   const issues: TErrorIssue[] = []
//   errorValues.forEach((errObj) => {
//     issues.push({
//       path: errObj.path,
//       message: errObj.message,
//     })
//   })
//   return {
//     statusCode: 400,
//     status: 'error',
//     message: 'Validation Error',
//     issues,
//   }
// }
// export default handleValidationError
//# sourceMappingURL=handleValidationError.js.map