"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCastError = void 0;
const handleCastError = (error) => {
    const castErrorIssues = [{
            path: error.path,
            message: error.message,
            stack: error.stack,
            kind: error.kind
        }];
    return {
        statusCode: 406,
        status: "Cast Error Found",
        message: error.message,
        issues: castErrorIssues
    };
};
exports.handleCastError = handleCastError;
