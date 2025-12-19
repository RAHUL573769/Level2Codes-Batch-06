"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
// import { notFoundController } from "./controllers/notFoud.controller";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// const userRouter = express.Router();
// userRouter.get("/", (_req: Request, res: Response) => {
//   res.status(200).json({
//     message: "Welcome To Murir Tin",
//     status: "success",
//   });
// });
// app.use("/api/v1/users", userRouter);
app.use("/main", routes_1.default);
// app.use("/api/v1/users", userRouter)
// app.get(Controller.notFound)"*", notFound
app.use((err, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something Went Wrong";
    const status = err.status || "ERROR";
    res.status(statusCode).json({
        message,
        status,
    });
    next();
});
exports.default = app;
//# sourceMappingURL=app.js.map