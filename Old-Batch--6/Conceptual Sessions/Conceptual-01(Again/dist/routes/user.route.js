"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const data_1 = require("../Miscellinious/data");
const user_controller_1 = require("../controller/user.controller");
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.status(200).json({
        req: req.path,
        message: "User Fetched",
        status: "success",
        data: data_1.data,
    });
});
router.post("/create-user", user_controller_1.UserController.createUser);
exports.UserRouter = router;
//# sourceMappingURL=user.route.js.map