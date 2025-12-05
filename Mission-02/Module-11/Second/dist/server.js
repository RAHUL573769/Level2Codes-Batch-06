"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const config_1 = __importDefault(require("./config"));
const RouteHandleers_1 = __importStar(require("./helpers/RouteHandleers"));
const sendJson_1 = require("./helpers/sendJson");
const fileDb_1 = require("./helpers/fileDb");
const parsers_1 = __importDefault(require("./helpers/parsers"));
(0, RouteHandleers_1.default)("GET", "/new", (req, res) => {
    (0, sendJson_1.sendJson)(res, 200, {
        message: "Hello From Type Script",
        path: req.url
    });
    // res.writeHead(200, { "content-type": "application/json" })
    // res.end(JSON.stringify({
    //     message: "Hello World From TS",
    //     path: req.url
    // }))
});
(0, RouteHandleers_1.default)("POST", "/api/users/user", async (req, res) => {
    const body = await (0, parsers_1.default)(req);
    (0, sendJson_1.sendJson)(res, 201, body);
});
(0, RouteHandleers_1.default)("POST", "/api/newUsers", async (req, res) => {
    const body = await (0, parsers_1.default)(req);
    const users = (0, fileDb_1.readUsers)();
    const newUsers = {
        ...body
    };
    users.push(newUsers);
    (0, fileDb_1.writeUsers)(users);
    (0, sendJson_1.sendJson)(res, 201, body);
});
const server = http_1.default.createServer((req, res) => {
    // console.log("Server is Running")
    const method = req.method?.toUpperCase() || "";
    const path = req.url;
    const methodMap = RouteHandleers_1.routes.get(method);
    const handler = methodMap?.get(path);
    if (handler) {
        handler(req, res);
    }
    else {
        res.writeHead(404, { "content-type": "application/json" });
        res.end(JSON.stringify({}));
    }
    // console.log("Server is Running")
    if (req.url === '/' && req.method === "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "Hello World From TS",
            path: req.url
        }));
    }
    if (req.url === "/api" && req.method === "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "Hello Fom  JS Api"
        }));
    }
    if (req.url === "/users/api" && req.method === "POST") {
        const users = {
            id: 1,
            name: "Rahul"
        };
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(users));
    }
    if (req.url === "/api/users" && req.method === "POST") {
        let requestBody = '';
        //listen  for data chunk
        req.on("data", (chunk) => {
            requestBody += chunk.toString();
        });
        req.on("end", () => {
            try {
                const parsedBody = JSON.parse(requestBody);
                console.log("Request Body", requestBody);
                console.log("Parsed Body", parsedBody);
                // res.end(requestBody)
                // res.end(JSON.stringify(requestBody))
                res.end(JSON.stringify(parsedBody));
            }
            catch (error) {
                console.log(error);
            }
        });
        // res.end(requestBody)
        // res.end(JSON.stringify({
        //     message: "Processing"
        // }))
    }
});
server.listen(config_1.default.PORT, () => {
    console.log(`Server is running at ${config_1.default.PORT}`);
});
//# sourceMappingURL=server.js.map