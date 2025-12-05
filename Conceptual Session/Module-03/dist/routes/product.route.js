"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const product_controller_1 = require("../controller/product.controller");
const productRoute = (req, res) => {
    // console.log(req.url)
    const url = req.url;
    const method = req.method;
    if (method === "GET" && url === '/') {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Eita Root URL" }));
    }
    else if (url?.startsWith("/product")) {
        (0, product_controller_1.productController)(req, res);
    }
    else {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Bhai Kono kichuNai" }));
    }
};
exports.productRoute = productRoute;
