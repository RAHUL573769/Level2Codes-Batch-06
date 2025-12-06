"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const db_1 = require("../database/db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginInToDb = async (email, password) => {
    const user = await db_1.pool.query(`
        SELECT * FROM users WHERE email=$1
        
        
        `, [email]);
    const matchPassword = await bcrypt_1.default.compare(password, user.rows[0].password);
    if (user.rows.length === 0) {
        throw new Error("NoUser Found");
    }
    if (!matchPassword) {
        throw new Error("Wrong Password");
    }
    console.log("Logino Db", user);
    const JwtPayload = {
        id: user.rows[0].id,
        name: user.rows[0].name,
        email: user.rows[0].email,
        role: user.rows[0].role
    };
    const secret = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";
    const token = jsonwebtoken_1.default.sign(JwtPayload, secret, { expiresIn: "7d" });
    // console.log("UsER", user)
    // console.log("MatchPassword", matchPassword)
    // console.log("Token", token)
    return { token, user: user.rows[0] };
};
exports.AuthService = { loginInToDb };
//# sourceMappingURL=auth.service.js.map