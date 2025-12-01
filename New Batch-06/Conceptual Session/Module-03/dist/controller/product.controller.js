"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_service_1 = require("./product.service");
const parsedbody_1 = require("../parsedbody/parsedbody");
const sendRequest_1 = require("../utilities/sendRequest");
const productController = async (req, res) => {
    const url = req.url;
    const method = req.method;
    const urlPath = url.split("/");
    const id = urlPath && urlPath[1] === "products" ? Number(urlPath[2]) : null;
    // export const sendResponse = (res: ServerResponse, success: boolean, statusCode: number, message: string, data: any)
    if (method === "GET" && url === '/products') {
        try {
            const products = (0, product_service_1.productServices)();
            return (0, sendRequest_1.sendResponse)(res, true, 200, "Products Received Succesfuuly", products);
        }
        catch (error) {
            return (0, sendRequest_1.sendResponse)(res, false, 200, "Products Received Succesfuuly", error);
        }
        // res.writeHead(200, { "content-type": "application/json" })
        // res.end(JSON.stringify({ message: "Bhai ta Product Route", }))
        // return sendResponse(res, true, 200, "Products Received Succesfuuly", data: products)
        // return sendResponse(res, true, 200, "Products Received Succesfuuly", data: products)
    }
    else if (method === "GET" && id !== null) {
        const products = (0, product_service_1.productServices)();
        const product = products.find((p) => p.id === id);
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Bhai ta Product Route", data: product }));
    }
    else if (method === "POST" && url === "/products") {
        const body = await (0, parsedbody_1.parsedBody)(req);
        console.log(body);
        const product = (0, product_service_1.productServices)();
        const newProduct = {
            id: Date.now(),
            ...body
        };
        product.push(newProduct);
        (0, product_service_1.writeProduct)(product);
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Product Added Succesfully", data: newProduct }));
        return;
    }
    else if (method === "PUT" && id != null) {
        const body = await (0, parsedbody_1.parsedBody)(req);
        const product = (0, product_service_1.productServices)();
        const index = product.findIndex((p) => { p.id === id; });
        console.log(index);
        if (index < 0) {
            res.writeHead(200, { "content-type": "application/json" });
            res.end(JSON.stringify({ "message": "Product Not Found" }));
        }
        product[index] = { id: product.id, ...body };
    }
};
exports.productController = productController;
