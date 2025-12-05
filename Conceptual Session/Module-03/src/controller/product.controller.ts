import { IncomingMessage, ServerResponse } from "http";
import { productServices, writeProduct } from "./product.service";
import { IProduct } from '../type/ProductType';
import { parsedBody } from "../parsedbody/parsedbody";
import { sendResponse } from "../utilities/sendRequest";

export const productController = async (req: IncomingMessage, res: ServerResponse) => {

    const url = req.url

    const method = req.method

    const urlPath = url.split("/")
    const id = urlPath && urlPath[1] === "products" ? Number(urlPath[2]) : null
    // export const sendResponse = (res: ServerResponse, success: boolean, statusCode: number, message: string, data: any)
    if (method === "GET" && url === '/products') {


        try {
            const products = productServices()
            return sendResponse(res, true, 200, "Products Received Succesfuuly", products)




        } catch (error) {
            return sendResponse(res, false, 200, "Products Received Succesfuuly", error)

        }

        // res.writeHead(200, { "content-type": "application/json" })
        // res.end(JSON.stringify({ message: "Bhai ta Product Route", }))
        // return sendResponse(res, true, 200, "Products Received Succesfuuly", data: products)
        // return sendResponse(res, true, 200, "Products Received Succesfuuly", data: products)
    } else if (method === "GET" && id !== null) {
        const products = productServices()
        const product = products.find((p: IProduct) => p.id === id)
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: "Bhai ta Product Route", data: product }))


    } else if (method === "POST" && url === "/products") {

        const body = await parsedBody(req)
        console.log(body)
        const product = productServices()

        const newProduct = {
            id: Date.now(),
            ...body
        }
        product.push(newProduct)
        writeProduct(product)
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: "Product Added Succesfully", data: newProduct }))


        return
    } else if (method === "PUT" && id != null) {

        const body = await parsedBody(req)
        const product = productServices()
        const index = product.findIndex((p: IProduct) => { p.id === id })

        console.log(index)

        if (index < 0) {
            res.writeHead(200, { "content-type": "application/json" })
            res.end(JSON.stringify({ "message": "Product Not Found" }))

        }
        product[index] = { id: product.id, ...body }
    }
}