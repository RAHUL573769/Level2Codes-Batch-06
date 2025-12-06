"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database/database");
const app = (0, express_1.default)();
const port = 3000;
//database
(0, database_1.initDb)();
//parsers
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send(`Hello World!'  from ${req.path}`);
});
app.post("/", async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const query = `
      INSERT INTO users(name, email, age)
      VALUES($1, $2, $3)
      RETURNING *
    `;
        const result = await database_1.database.query(query, [name, email, age]);
        res.json({
            message: "User added",
            data: result.rows[0]
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});
app.get("/data", async (req, res) => {
    const query = 'SELECT * FROM users';
    const result = await database_1.database.query(query);
    console.log(result);
    res.json({
        message: "User added",
        data: result.rows[0],
        path: req.path
    });
});
app.get("/data/:id", async (req, res) => {
    const id = req.params['id'];
    const query = `SELECT * FROM users  WHERE id=$1`;
    const result = await database_1.database.query(query, [id]);
    // console.log(result)
    // console.log(result)
    res.json({
        message: "User added",
        data: result
    });
});
app.put("/data/:id", async (req, res) => {
    const id = req.params['id'];
    const { name, email } = req.body;
    const query = `UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`;
    const result = await database_1.database.query(query, [name, email, id]);
    res.json({
        message: "User updated",
        data: result
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=server.js.map