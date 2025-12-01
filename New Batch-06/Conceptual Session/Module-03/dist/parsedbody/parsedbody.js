"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsedBody = void 0;
const parsedBody = (req) => {
    return new Promise((resolve, rejected) => {
        let body = '';
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            try {
                resolve(JSON.parse(body));
            }
            catch (error) {
                rejected(error);
            }
        });
    });
};
exports.parsedBody = parsedBody;
