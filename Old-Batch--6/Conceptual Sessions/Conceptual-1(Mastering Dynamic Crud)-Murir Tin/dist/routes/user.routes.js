"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    res.status(200).json({
        message: "Welcome To Murir Tin",
        status: "success",
    });
});
router.post("/create-user", user_controller_1.UserController.createUser);
router.get("/user", user_controller_1.UserController.getAllUser);
router.get("/:id", user_controller_1.UserController.getSingleUserById);
exports.userRouter = router;
//# sourceMappingURL=user.routes.js.map