import express, { NextFunction, Request, Response } from "express";
import { Pool } from "pg";

const port = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_rnuUh2q4LABC@ep-odd-waterfall-a8llb5ti-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
});
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}\n`);

  next()
}
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

app.get("/", logger, (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    message: "API is working",
  });
});

// ========================
//     GET USER BY ID
// ========================
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE id = $1",
      [req.params.id]
    );

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

  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
});

// ========================
//     CREATE USER
// ========================
app.post("/users", async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO users(name, email) VALUES($1, $2) RETURNING * `,
      [name, email]
    );

    return res.status(200).json({
      success: true,
      data: result.rows[0],
    });

  } catch (error: any) {
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
app.get("/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM users");

    return res.status(200).json({
      success: true,
      count: result.rows.length,
      data: result.rows,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
});
app.put("/users/:id", async (req: Request, res: Response) => {


  const query = await pool.query(``)
})
app.listen(port, () => {
  console.log(`Server is listening on port ${port} `);
});
