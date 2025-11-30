
import e from "express";
import express, { Request, Response } from "express";
import { Pool } from "pg";

const port = 5000;

const app = express();
app.use(express.json());

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_4apswjofEdO8@ep-winter-brook-ahj8lwby-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
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

app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  console.log(req.body);
  return res.status(200).json({
    success: true,
    message: "API is working",
  });
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  return res.status(200).json({
    success: true,
    message: "API is working",
  });
});
app.post("/users", async (req: Request, res: Response) => {

  const { name, email } = req.body

  try {

    const result = await pool.query(`INSERT INTO users(name,email) VALUES($1,$2) RETURNING *`, [name, email])
    // console.log(req.body);
    // return res.status(200).json({
    //   success: true,
    //   message: "API is working",
    // });

    res.status(200).json({
      success: true,
      data: result.rows[0]
    })
    console.log(result)
  } catch (error) {
    console.log(error)
  }

});
app.listen(port, () => {
  console.log("Server is Listening");
});
