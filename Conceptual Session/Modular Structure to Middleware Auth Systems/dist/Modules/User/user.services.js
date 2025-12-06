"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const db_1 = require("../database/db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUserIntoDb = async (payload) => {
    const { name, email, password, role } = payload;
    const hashedPassword = await bcrypt_1.default.hash(password, 12);
    console.log(hashedPassword);
    const result = await db_1.pool.query(`INSERT INTO users(name,email,password,role) VALUES($1,$2,$3,$4) RETURNING *
        `, [name, email, hashedPassword, role]);
    delete result.rows[0].password;
    return result;
};
exports.UserServices = { createUserIntoDb };
//# sourceMappingURL=user.services.js.map