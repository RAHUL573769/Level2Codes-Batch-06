"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
const port = 3000;
require('dotenv').config();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello World!');
});
const pool = new pg_1.Pool({
    connectionString: `${process.env['CONNECTION_URL']}`
});
// console.log(pool)
const initDb = async function () {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT,
    phone VARCHAR(100),
    address VARCHAR(100),
    updated_now TIMESTAMP DEFAULT NOW()
);

        `);
    await pool.query(`
      CREATE TABLE IF NOT EXISTS todos(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    completed BOOLEAN,
    due_date DATE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

        
        `);
};
initDb();
// app.post("/", async (req: Request, res: Response) => {
//     const { name, email } = req.body
//     try {
//         const result = await pool.query(`INSERT INTO users(name,email) VALUES ($1,$2) RETURNING *`, [name, email])
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
//     res.status(200).json({
//         message: "API Not Working"
//     })
// })
app.post("/", async (req, res) => {
    const { name, email } = req.body;
    try {
        const result = await pool.query(`INSERT INTO users(name, email) VALUES ($1, $2) RETURNING *`, [name, email]);
        console.log(result.rows[0]);
        return res.status(200).json({
            message: "User created successfully",
            user: result.rows[0]
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Database error",
            error
        });
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=server.js.map