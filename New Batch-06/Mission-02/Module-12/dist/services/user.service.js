"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const database_1 = require("../database/database");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUserIntoDb = async (name, email, password, role) => {
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    console.log('hp', hashedPassword);
    const result = await database_1.pool.query(`INSERT INTO users(name, email,password,role) VALUES($1, $2,$3,$4) RETURNING *`, 
    // [name, email, password]
    [name, email, hashedPassword, role]);
    return result;
};
const getUsersFromDb = async (id) => {
    const result = await database_1.pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result;
};
exports.UserServices = { createUserIntoDb, getUsersFromDb };
