"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDb = exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    connectionString: "postgresql://neondb_owner:npg_2zxhvP7sGROe@ep-shiny-star-a84ml8l9-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
});
const initDb = async () => {
    await exports.pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(150) UNIQUE NOT NULL,
            password TEXT NOT NULL,
            age INT,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
        )
    `);
    console.log("DB Connected");
};
exports.initDb = initDb;
//# sourceMappingURL=db.js.map