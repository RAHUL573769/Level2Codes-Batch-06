"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const productController = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (method === "GET" && url === '/products') {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Bhai ta Product Route" }));
    }
};
exports.productController = productController;
