"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("../Modules/database/db");
const user_route_1 = require("../Modules/User/user.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/usersDb1", user_route_1.UserRouters);
app.use("/users", user_route_1.UserRouters);
app.use("/usersDb", user_route_1.UserRouters);
app.get("/", (req, res) => {
    res.status(200).json({
        message: "This is Root Route",
        path: req.path
    });
});
(0, db_1.initDb)();
app.listen(5000, () => {
    console.log("Server is Running");
});
//# sourceMappingURL=server.js.map