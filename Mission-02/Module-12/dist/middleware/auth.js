"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (...roles) => {
    console.log(roles);
    return (req, res, next) => {
        try {
            const token = req.headers.authorization;
            console.log("Ath Toke", token);
            if (!token) {
                res.send("You are  not allowed");
            }
            const decoded = jsonwebtoken_1.default.verify(token, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30");
            req.user = decoded;
            console.log('D', decoded);
            if (roles.length && !roles.includes(decoded.role)) { }
            next();
        }
        catch (error) {
            console.log("Error", error);
        }
    };
};
exports.auth = auth;
