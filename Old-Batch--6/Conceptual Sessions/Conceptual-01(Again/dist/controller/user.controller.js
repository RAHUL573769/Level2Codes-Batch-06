"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
// import User from "../models/user.model"
const user_service_1 = require("../service/user.service");
const user_model_1 = __importDefault(require("../models/user.model"));
const createUser = async (req, res) => {
    try {
        const data = req.body;
        const result = await user_service_1.UserServices.createUserIntoDb(data);
        res.status(200).json({
            status: "success",
            message: "User Created",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            status: "fail",
            message: error.message || "Something Went Wrong"
        });
    }
};
const getAllUser = async () => {
    try {
        const result = await user_model_1.default.find();
        return result;
    }
    catch (error) {
        throw error;
    }
};
const getSingleUser = async (id) => {
    try {
        const result = await user_model_1.default.findById(id);
        return result;
    }
    catch (error) {
        throw error;
    }
};
const updateUser = async (id, userData) => {
    const result = await user_model_1.default.findByIdAndUpdate(id, userData, { new: true, runValidators: true });
    return result;
};
exports.UserController = { updateUser, createUser, getAllUser, getSingleUser };
//# sourceMappingURL=user.controller.js.map