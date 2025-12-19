"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./user.routes");
const globalRouter = express_1.default.Router();
globalRouter.use("/", user_routes_1.userRouter);
globalRouter.use("/users", user_routes_1.userRouter);
const routes = [
    {
        path: "/",
        route: user_routes_1.userRouter
    }
];
routes.forEach((item) => {
    globalRouter.use(item.path, item.route);
});
exports.default = globalRouter;
//# sourceMappingURL=index.js.map