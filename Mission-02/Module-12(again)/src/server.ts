import express, { Request, Response } from 'express'
import { database, initDb } from './database/database'


const app = express()
const port = 3000


//database
initDb()
//parsers
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
    res.send(`Hello World!'  from ${req.path}`)
})
app.post("/", async (req, res) => {
    try {
        const { name, email, age } = req.body;

        const query = `
      INSERT INTO users(name, email, age)
      VALUES($1, $2, $3)
      RETURNING *
    `;

        const result = await database.query(query, [name, email, age]);

        res.json({
            message: "User added",
            data: result.rows[0]
        });

    } catch (err: any) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

app.get("/data", async (req: Request, res: Response) => {

    const query = 'SELECT * FROM users';

    const result = await database.query(query);
    console.log(result)
    res.json({
        message: "User added",
        data: result.rows[0],
        path: req.path
    });
})
app.get("/data/:id", async (req: Request, res: Response) => {

    const id = req.params['id'];
    const query = `SELECT * FROM users  WHERE id=$1`;

    const result = await database.query(query, [id]);
    // console.log(result)
    // console.log(result)
    res.json({
        message: "User added",
        data: result
    });
})
app.put("/data/:id", async (req: Request, res: Response) => {


    const id = req.params['id'];
    const { name, email } = req.body;
    const query = `UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`;
    const result = await database.query(query, [name, email, id]);
    res.json({
        message: "User updated",
        data: result
    });
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
