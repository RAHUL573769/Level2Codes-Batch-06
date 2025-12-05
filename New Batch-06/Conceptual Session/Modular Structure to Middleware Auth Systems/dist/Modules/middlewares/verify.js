"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = void 0;
const verify = (_req, _res, next) => {
    console.log("Wait ID nichen");
    // console.log(req, res, next)
    // console.log(req, res, next)
    // if (!ID) {
    //     throw new Error("Not Allowed")
    // }
    next();
};
exports.verify = verify;
//# sourceMappingURL=verify.js.map