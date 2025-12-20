"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, payload) => {
    res.status(payload.statusCode).json({
        status: payload.status,
        message: payload.message,
        data: payload.data ?? null
    });
};
exports.sendResponse = sendResponse;
//# sourceMappingURL=utils.js.map