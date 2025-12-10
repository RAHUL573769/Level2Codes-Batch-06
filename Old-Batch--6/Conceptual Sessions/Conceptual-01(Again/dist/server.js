"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const user_route_1 = require("./routes/user.route");
const app = (0, express_1.default)();
async function server() {
    try {
        await mongoose_1.default.connect(config_1.default.DB_LOCAL);
        app.get('/', (req, res) => {
            app.use("/api/v1/users", user_route_1.UserRouter);
            res.status(200).json({
                req: req.path,
                message: "Welcome to Murir Tin",
                status: "success"
            });
        });
        app.listen(config_1.default.PORT, () => {
            console.log(`Example app listening on port ${config_1.default.PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
server().catch((error) => {
    console.log(error);
});
//# sourceMappingURL=server.js.map