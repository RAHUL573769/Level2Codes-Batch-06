"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
// export const authenticateUser = catchAsyncFunction(async (req: Request, res: Response, next: NextFunction) => {
//     const email = req.body.email
//     const password = req.body.password
//     const user = await User.findOne({ email, password })
//     if (!user) {
//         res.status(403).json({
//             status: "Failed",
//             message: "Ivalid User and Password"
//         })
//     }
//     if (user?.role !== "admin") {
//         res.status(403).json({
//             status: "Failed",
//             message: "You are  not Admin"
//         })
//     }
//     next()
// })
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const checkAuth = (...roles) => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        // const email = req.body.email
        // const password = req.body.password
        // const user1 = await User.findOne({ email })
        // if (!user) {
        //     res.status(403).json({
        //         status: "Failed",
        //         message: "Ivalid User and Password"
        //     })
        // }
        // if (user?.role !== "admin") {
        //     res.status(403).json({
        //         status: "Failed",
        //         message: "You are  not Admin"
        //     })
        // }
        // if (!user?.role || !roles.includes(user.role)) {
        //     res.status(403).json({
        //         status: "Failed",
        //         message: "You are  not Admin"
        //     })
        // }
        const token = req.headers.authorization;
        console.log("TOKEN", token);
        if (!token) {
            throw new Error("Invalid tokrn");
        }
        const decodedToken = jsonwebtoken_1.default.verify(token, "qwertyuiop");
        console.log("Devosdes", decodedToken);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { email1, role } = decodedToken;
        const userAfterDecoded = yield user_model_1.default.findOne({ email1 });
        if (!userAfterDecoded) {
            throw new Error("Invalid User");
        }
        if (!roles.includes(userAfterDecoded.role)) {
            throw new Error("You are Unautorized");
        }
        next();
    }));
};
exports.checkAuth = checkAuth;
