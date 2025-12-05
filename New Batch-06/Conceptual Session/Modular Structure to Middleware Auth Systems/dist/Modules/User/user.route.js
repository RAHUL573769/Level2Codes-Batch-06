"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouters = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("../database/db");
const router = express_1.default.Router();
router.post("/", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const result = await db_1.pool.query(`INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING *
        `, [name, email, password]);
        res.status(200).json({
            success: true,
            message: "User Created",
            data: result.rows[0]
        });
    }
    catch (error) {
        console.log(error);
    }
});
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