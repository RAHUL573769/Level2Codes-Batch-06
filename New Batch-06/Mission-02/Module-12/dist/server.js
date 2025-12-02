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
const pool = new pg_1.Pool({
    connectionString: "postgresql://neondb_owner:npg_4apswjofEdO8@ep-winter-brook-ahj8lwby-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
});
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
    )
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
    )
  `);
};
initDb();
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    console.log(req.body);
    return res.status(200).json({
        success: true,
        message: "API is working",
    });
});
app.post("/", (req, res) => {
    console.log(req.body);
    return res.status(200).json({
        success: true,
        message: "API is working",
    });
});
app.post("/users", async (req, res) => {
    const { name, email } = req.body;
    try {
        const result = await pool.query(`INSERT INTO users(name,email) VALUES($1,$2) RETURNING *`, [name, email]);
        // return res.status(200).json({
        //   success: true,
        //   message: "API is working",
        // });
        res.status(200).json({
            success: true,
            data: result.rows[0]
        });
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
});
app.listen(port, () => {
    console.log("Server is Listening");
});
