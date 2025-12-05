import { Pool } from "pg"

export const pool = new Pool({
    connectionString:
        "postgresql://neondb_owner:npg_2zxhvP7sGROe@ep-shiny-star-a84ml8l9-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
})

export const initDb = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(150) UNIQUE NOT NULL,
            password TEXT NOT NULL,
            age INT,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
        )
    `)

    console.log("DB Connected")
}

