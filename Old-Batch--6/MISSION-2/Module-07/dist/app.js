"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./middlewares/logger"));
const app = (0, express_1.default)();
const userRouter = express_1.default.Router();
app.use(express_1.default.json());
app.use(userRouter);
userRouter.get("/api/v1", (req, res) => {
    const user = req.body;
    res.json({
        message: "User Data Created",
        success: true,
        data: user,
    });
});
userRouter.get("/", logger_1.default, (_req, res) => {
    res.send("Hello From Js");
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        message: "Succcesfully Received Data",
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map