import { IncomingMessage, ServerResponse } from "http";

export const productController = (req: IncomingMessage, res: ServerResponse) => {

    const url = req.url

    const method = req.method
    if (method === "GET" && url === '/products') {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: "Bhai ta Product Route" }))

    }
}