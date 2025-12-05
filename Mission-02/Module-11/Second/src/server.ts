import http, { IncomingMessage, Server, ServerResponse } from 'http'
import config from './config'
import addRoutes, { RouteHandler, routes } from './helpers/RouteHandleers'
import { sendJson } from './helpers/sendJson'

import { readUsers, writeUsers } from './helpers/fileDb'
import parseBody from './helpers/parsers'



addRoutes("GET", "/new", (req, res) => {

    sendJson(res, 200, {
        message: "Hello From Type Script",
        path: req.url
    })
    // res.writeHead(200, { "content-type": "application/json" })
    // res.end(JSON.stringify({
    //     message: "Hello World From TS",
    //     path: req.url
    // }))
})
addRoutes("POST", "/api/users/user", async (req, res) => {
    const body = await parseBody(req)
    sendJson(res, 201, body)
})
addRoutes("POST", "/api/newUsers", async (req, res) => {
    const body = await parseBody(req)

    const users = readUsers()
    const newUsers = {

        ...body
    }
    users.push(newUsers)
    writeUsers(users)
    sendJson(res, 201, body)
})
const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {


    // console.log("Server is Running")
    const method = req.method?.toUpperCase() || "";
    const path = req.url
    const methodMap = routes.get(method)
    const handler: RouteHandler | undefined = methodMap?.get(path as string)
    if (handler) {
        handler(req, res)
    } else {
        res.writeHead(404, { "content-type": "application/json" })
        res.end(JSON.stringify({}))
    }
    // console.log("Server is Running")
    if (req.url === '/' && req.method === "GET") {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({
            message: "Hello World From TS",
            path: req.url
        }))
    }
    if (req.url === "/api" && req.method === "GET") {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({
            message: "Hello Fom  JS Api"
        }))

    }
    if (req.url === "/users/api" && req.method === "POST") {

        const users = {
            id: 1,
            name: "Rahul"
        }

        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify(users))

    }
    if (req.url === "/api/users" && req.method === "POST") {
        let requestBody = ''
        //listen  for data chunk
        req.on("data", (chunk) => {
            requestBody += chunk.toString()
        })


        req.on("end", () => {
            try {

                const parsedBody = JSON.parse(requestBody)
                console.log("Request Body", requestBody)
                console.log("Parsed Body", parsedBody)
                // res.end(requestBody)

                // res.end(JSON.stringify(requestBody))


                res.end(JSON.stringify(parsedBody))


            } catch (error) {
                console.log(error)
            }

        })
        // res.end(requestBody)
        // res.end(JSON.stringify({
        //     message: "Processing"
        // }))

    }




})

server.listen(config.PORT, () => {
    console.log(`Server is running at ${config.PORT}`)
})