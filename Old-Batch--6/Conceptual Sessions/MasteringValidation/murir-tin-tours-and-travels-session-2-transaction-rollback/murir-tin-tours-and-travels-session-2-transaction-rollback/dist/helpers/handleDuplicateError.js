"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDuplicate = void 0;
const handleDuplicate = (err) => {
    // errorResponse.statusCode = 409
    // errorResponse.message = "Duplicate Error Found"
    // errorResponse.status = "Failed"
    // errorResponse.issues = [
    //     {
    //         path: "", message: err.message,
    //     }
    // ]
    const duplicationIssues = [
        {
            path: "",
            message: ""
        }
    ];
    return {
        status: "Error",
        statusCode: 409,
        message: err.message,
        issues: duplicationIssues
    };
};
exports.handleDuplicate = handleDuplicate;
