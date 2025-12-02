"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const port = 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const pool = new pg_1.Pool({
    connectionString: "postgresql://neondb_owner:npg_4apswjofEdO8@ep-winter-brook-ahj8lwby-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
});
const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}\n`);
    next();
};
const initDb = async () => {
    await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    age INT,
    phone VARCHAR(15),
    address TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
  );
`);
    await pool.query(`
    CREATE TABLE IF NOT EXISTS todos(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT false,
  due_date DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
`);
};
initDb();
app.get("/", logger, (req, res) => {
    return res.status(200).json({
        success: true,
        message: "API is working",
    });
});
// ========================
//     GET USER BY ID
// ========================
app.get("/users/:id", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users WHERE id = $1", [req.params.id]);
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
app.post("/users", async (req, res) => {
    const { name, email } = req.body;
    try {
        const result = await pool.query(`INSERT INTO users(name, email) VALUES($1, $2) RETURNING * `, [name, email]);
        return res.status(200).json({
            success: true,
            data: result.rows[0],
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
});
// ========================
//     GET ALL USERS
// ========================
app.get("/users", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users");
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
    const query = await pool.query(``);
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port} `);
});
