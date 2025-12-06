"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDb = exports.database = void 0;
const pg_1 = require("pg");
exports.database = new pg_1.Pool({
    connectionString: "postgresql://neondb_owner:npg_BFCrsj3wRE5X@ep-wild-sun-a8djw2kf-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
});
const initDb = async () => {
    await exports.database.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) NOT NULL,
      age INT
    )
  `);
};
exports.initDb = initDb;
//# sourceMappingURL=database.js.map