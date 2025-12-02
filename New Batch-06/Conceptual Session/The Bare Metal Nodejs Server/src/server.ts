import express, { Request, Response } from 'express'
import { Pool } from "pg"

const app = express()
const port = 3000

app.use(express.json())

// Database pool
const pool = new Pool({
    connectionString: `postgresql://neondb_owner:npg_i4n0JzWUQglD@ep-hidden-brook-ahsielob-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`
})

// Create tables
const initDb = async () => {
    try {
        await pool.query(`
        CREATE TABLE IF NOT EXISTS users1(
            id SERIAL PRIMARY KEY,
            name VARCHAR(200) NOT NULL,
            email VARCHAR(150) UNIQUE NOT NULL,
            age INT,
            address TEXT,
            created_at TIMESTAMP DEFAULT NOW()
        )
        `)

        await pool.query(`
        CREATE TABLE IF NOT EXISTS todo1(
            id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users1(id) ON DELETE CASCADE,
            title VARCHAR(100),
            description TEXT,
            completed BOOLEAN DEFAULT false,
            due_date DATE,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
        )
        `)

        console.log("Database initialized")
    } catch (err) {
        console.error("DB Init error:", err)
    }
}

initDb()

// Route
app.post("/users", async (req: Request, res: Response) => {
    const { name, email } = req.body

    if (!name || !email) {
        return res.status(400).json({ message: "name and email required" })
    }

    try {
        const result = await pool.query(
            `INSERT INTO users1(name, email) VALUES ($1, $2) RETURNING *`,
            [name, email]
        )

        return res.status(201).json({
            message: "User created successfully",
            data: result.rows[0]
        })

    } catch (error: any) {
        return res.status(500).json({
            message: "Failed",
            error: error.message
        })
    }
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})
