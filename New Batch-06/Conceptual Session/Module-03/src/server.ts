import { createServer, Server } from "http"
import { productRoute } from "./routes/product.route"
import { productServices } from "./controller/product.service"

const server: Server = createServer((req, res) => {

    productRoute(req, res)
    productServices
    // console.log(req)
    // console.log(req)
})
server.listen(5000, () => {
    console.log(`Server Running`)
})