import { IncomingMessage, ServerResponse } from "http";
import { productServices } from "./product.service";
import { IProduct } from '../type/ProductType';

export const productController = (req: IncomingMessage, res: ServerResponse) => {

    const url = req.url

    const method = req.method

    const urlPath = url.split("/")
    const id = urlPath && urlPath[1] === "products" ? Number(urlPath[2]) : null
    // console.log(id)
    if (method === "GET" && url === '/products') {
        const products = productServices()
        console.log(products)
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: "Bhai ta Product Route", data: products }))

    } else if (method === "GET" && id !== null) {
        const products = productServices()
        const product = products.find((p: IProduct) => p.id === id)
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: "Bhai ta Product Route", data: product }))


    }
}