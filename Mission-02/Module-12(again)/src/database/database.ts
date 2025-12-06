import { Pool } from "pg";

export const database = new Pool({
  connectionString: "postgresql://neondb_owner:npg_BFCrsj3wRE5X@ep-wild-sun-a8djw2kf-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
})

export const initDb = async () => {
  await database.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) NOT NULL,
      age INT
    )
  `);
};


