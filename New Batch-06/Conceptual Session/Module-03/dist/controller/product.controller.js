"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_service_1 = require("./product.service");
const productController = (req, res) => {
    const url = req.url;
    const method = req.method;
    const urlPath = url.split("/");
    const id = urlPath && urlPath[1] === "products" ? Number(urlPath[2]) : null;
    // console.log(id)
    if (method === "GET" && url === '/products') {
        const products = (0, product_service_1.productServices)();
        console.log(products);
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Bhai ta Product Route", data: products }));
    }
    else if (method === "GET" && id !== null) {
        const products = (0, product_service_1.productServices)();
        const product = products.find((p) => p.id === id);
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Bhai ta Product Route", data: product }));
    }
};
exports.productController = productController;
