"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const config_1 = require("./config");
const server = (0, http_1.createServer)((req, res) => {
    console.log(`Server is Running ${config_1.config.port}`);
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "Hello From Nodejs",
            path: req.url,
        }));
    }
    if (req.url === "/url" && req.method === "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "Hello From Nodejs URL",
            path: req.url,
        }));
    }
    if (req.url === "/urlPost" && req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const parsedBody = JSON.parse(body);
            // console.log(parsedBody);
            res.writeHead(200, { "content-type": "application/json" });
            res.end(JSON.stringify({
                message: "Request Received",
                data: parsedBody,
            }));
        });
        return;
    }
});
server.listen(config_1.config.port, () => {
    console.log("Server is Running");
});
