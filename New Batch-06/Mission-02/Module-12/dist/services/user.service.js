"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const database_1 = require("../database/database");
const createUserIntoDb = async (name, email) => {
    const result = await database_1.pool.query(`INSERT INTO users(name, email) VALUES($1, $2) RETURNING *`, [name, email]);
    return result;
};
const getUsersFromDb = async (id) => {
    const result = await database_1.pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result;
};
exports.UserServices = { createUserIntoDb, getUsersFromDb };
