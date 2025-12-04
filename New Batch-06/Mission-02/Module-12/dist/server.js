"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./middleware/middleware");
const database_1 = require("./database/database");
const user_route_1 = require("./router/user.route");
const auth_route_1 = require("./auth/auth.route");
const port = 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// app.use("/getUsers", UserRoute.router)
// app.use("/createUsers", UserRoute.router)
app.use("/users", user_route_1.UserRoute);
(0, database_1.initDb)();
// ========================
//     GET USER BY ID
// ========================
app.get("/users/:id", middleware_1.logger, async (req, res) => {
    try {
        const result = await database_1.pool.query("SELECT * FROM users WHERE id = $1", [req.params.id]);
        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        return res.status(200).json({
            success: true,
            data: result.rows[0]
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: "Server error" });
    }
});
// ========================
//     CREATE USER
// ========================
// ========================
//     GET ALL USERS
// ========================
app.get("/users", async (req, res) => {
    try {
        const result = await database_1.pool.query("SELECT * FROM users");
        return res.status(200).json({
            success: true,
            count: result.rows.length,
            data: result.rows,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: "Server error" });
    }
});
app.put("/users/:id", async (req, res) => {
    app.post("/auth", auth_route_1.AuthRoute.route);
    const query = await database_1.pool.query(``);
});
app.use("/auth", auth_route_1.AuthRoute.route);
app.listen(port, () => {
    console.log(`Server is listening on port ${port} `);
});
