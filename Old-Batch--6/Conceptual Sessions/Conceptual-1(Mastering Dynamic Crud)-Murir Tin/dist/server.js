"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
require("dotenv").config();
// const port = 5000;
async function server() {
    try {
        await mongoose_1.default.connect(config_1.default.DB_LOCAL);
        app_1.default.listen(`${config_1.default.PORT} `, () => {
            console.log(`DB Connected ${config_1.default.PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
server();
//# sourceMappingURL=server.js.map