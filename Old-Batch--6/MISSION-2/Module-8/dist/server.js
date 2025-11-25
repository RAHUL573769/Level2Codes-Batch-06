"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const confiq_1 = __importDefault(require("./app/confiq"));
const mongoose = require("mongoose");
require("dotenv").config();
const port = 3000;
async function server() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/myapp");
        app_1.default.listen(confiq_1.default.port, () => {
            console.log(`Example app listening on port ${port}`);
        });
        console.log(process.cwd());
    }
    catch (error) { }
}
server();
//# sourceMappingURL=server.js.map