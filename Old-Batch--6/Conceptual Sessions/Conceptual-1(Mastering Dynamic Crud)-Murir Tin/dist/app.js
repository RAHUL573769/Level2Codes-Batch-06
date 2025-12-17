"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./routes/user.routes");
const cors_1 = __importDefault(require("cors"));
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
app.use("/", user_routes_1.userRouter);
app.use("/api/v1/users", user_routes_1.userRouter);
// app.get(Controller.notFound)"*", notFound
exports.default = app;
//# sourceMappingURL=app.js.map