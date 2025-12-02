"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
//DB
exports.pool = new pg_1.Pool({
    connectionString: `postgresql://neondb_owner:npg_5tdGe0SHAPKN@ep-hidden-brook-ahsielob-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`,
});
const initDB = async () => {
    await exports.pool.query(`
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
    await exports.pool.query(`
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
exports.default = initDB;
