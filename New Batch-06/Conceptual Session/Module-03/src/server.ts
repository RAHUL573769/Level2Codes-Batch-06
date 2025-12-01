import { createServer, Server } from "http"
import { productRoute } from "./routes/product.route"

const server: Server = createServer((req, res) => {

    productRoute(req, res)

    // console.log(req)
    // console.log(req)
})
server.listen(5000, () => {
    console.log(`Server Running`)
})