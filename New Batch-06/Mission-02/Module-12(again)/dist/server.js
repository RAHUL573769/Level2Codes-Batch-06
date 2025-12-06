"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database/database");
const app = (0, express_1.default)();
const port = 3000;
//database
(0, database_1.initDb)();
//parsers
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send(`Hello World!'  from ${req.path}`);
});
app.post("/", (req, res) => {
    res.status(200).json({
        message: "Addeed",
        path: req.path
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=server.js.map