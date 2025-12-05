"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendJson = sendJson;
function sendJson(res, statusCode, data) {
    res.writeHead(statusCode, { "content-type": "application/json" });
    res.end(JSON.stringify(data));
}
//# sourceMappingURL=sendJson.js.map