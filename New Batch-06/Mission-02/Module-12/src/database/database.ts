import { Pool } from "pg";

export const pool = new Pool({
    connectionString:
        "postgresql://neondb_owner:npg_rnuUh2q4LABC@ep-odd-waterfall-a8llb5ti-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
});


export const initDb = async () => {
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