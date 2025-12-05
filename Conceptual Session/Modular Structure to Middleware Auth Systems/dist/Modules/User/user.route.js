"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouters = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("../database/db");
const user_controller_1 = require("./user.controller");
const verify_1 = require("../middlewares/verify");
const router = express_1.default.Router();
router.post("/", verify_1.verify, user_controller_1.UserController.createUser);
router.post("/users", async (req, res) => {
    const body = req.body;
    console.log(body);
    res.status(200).json({
        message: "This is User Route",
        path: req.path
    });
});
router.post("/", async (req, res) => {
    const { name, email, password } = req.body;
    const result = await db_1.pool.query(`
        INSERT  INTO users(name,email,password) VALUES ($1,$2,$3)
        RETURNING *
        
        `, [name, email, password]);
    console.log(result);
    res.status(200).json({
        message: "USER DB CREATED",
        path: req.path,
        data: result
    });
});
exports.UserRouters = router;
//# sourceMappingURL=user.route.js.map