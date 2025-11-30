"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const product_route_1 = require("./routes/product.route");
const product_service_1 = require("./controller/product.service");
const server = (0, http_1.createServer)((req, res) => {
    (0, product_route_1.productRoute)(req, res);
    product_service_1.productServices;
    // console.log(req)
    // console.log(req)
});
server.listen(5000, () => {
    console.log(`Server Running`);
});
