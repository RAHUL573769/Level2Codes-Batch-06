"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, success, statusCode, message, data) => {
    const response = {
        message: message,
        statusCode: statusCode,
        data: data
    };
    res.writeHead(statusCode, { "content-type": "application/json" });
    res.end(JSON.stringify(response));
};
exports.sendResponse = sendResponse;
