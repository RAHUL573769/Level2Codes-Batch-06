"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, _res, next) => {
    console.log(req.url);
    console.log(req.query);
    console.log(req.params);
    next();
};
exports.default = logger;
//# sourceMappingURL=logger.js.map