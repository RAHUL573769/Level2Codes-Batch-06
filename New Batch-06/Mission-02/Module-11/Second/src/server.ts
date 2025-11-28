import http, { IncomingMessage, Server, ServerResponse } from 'http'


const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {


    console.log("Server is Running")

    if (req.url === '/' && req.method === "GET") {
        res.writeHead(200, { "content-type": "application/json" })
    }

})

console.log(server)