"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const auth_1 = require("../middleware/auth");
const route = express_1.default.Router();
route.post("/login", (0, auth_1.auth)("admin"), auth_controller_1.AuthController.loginUser);
exports.AuthRoute = { route };
