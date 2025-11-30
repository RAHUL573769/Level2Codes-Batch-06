import { IncomingMessage, ServerResponse } from "http";
import { productController } from "../controller/product.controller";

export const productRoute = (req: IncomingMessage, res: ServerResponse) => {

    // console.log(req.url)


    const url = req.url
    const method = req.method


    if (method === "GET" && url === '/') {

        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: "Eita Root URL" }))
    } else if (url?.startsWith("/product")) {
        productController(req, res)

    }
    else {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: "Bhai Kono kichuNai" }))
    }
}