"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const database_1 = require("../database/database");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginIntoDatabase = async (email, password) => {
    const result = database_1.pool.query(`SELECT * FROM users WHERE email=$1`, [email]);
    if ((await result).rows.length === 0) {
        return null;
    }
    const user = (await result).rows[0];
    const match = await bcrypt_1.default.compare(password, user.password);
    if (!match) {
        return false;
    }
    const secret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30';
    const token = jsonwebtoken_1.default.sign({ name: user.name, email: user.email, role: user.role }, secret, {
        expiresIn: "7d"
    });
    console.log("Token", token);
    return { token, user };
};
exports.AuthServices = { loginIntoDatabase };
