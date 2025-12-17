"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundController = void 0;
const notFound = (req, res) => {
    res.status(200).json({
        status: "Failed",
        path: req.path,
    });
};
exports.notFoundController = notFound;
//# sourceMappingURL=notFoud.controller.js.map