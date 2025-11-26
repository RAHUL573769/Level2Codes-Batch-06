"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const userRouter = express_1.default.Router();
userRouter.get("/", (_req, res) => {
    res.status(200).json({
        message: "Welcome To Murir Tin",
        status: "success",
    });
});
app.use("/api/v1/users", userRouter);
// app.get("/", (_req: Request, res: Response) => {
//   res.status(200).json({
//     message: "Welcome To Murir Tin",
//     status: "success",
//   });
// });
exports.default = app;
//# sourceMappingURL=app.js.map