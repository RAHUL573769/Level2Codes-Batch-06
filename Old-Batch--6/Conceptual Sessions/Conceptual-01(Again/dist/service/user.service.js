"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const createUserIntoDb = async (data) => {
    const result = await user_model_1.default.create(data);
    return result;
};
exports.UserServices = { createUserIntoDb };
//# sourceMappingURL=user.service.js.map