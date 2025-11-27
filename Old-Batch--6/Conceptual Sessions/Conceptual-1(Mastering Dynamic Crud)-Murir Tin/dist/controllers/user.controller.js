"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
// import { User } from "../Model/user.model";
const user_service_1 = require("../services/user.service");
const createUser = async (req, res) => {
    try {
        const userData = req.body;
        // const result = await User.create(userData)
        const result = await user_service_1.UserService.createUserIntoDb(userData);
        res.status(200).json({
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            status: "Failed",
            message: error.message || "Error Found"
        });
        console.log(error);
    }
};
const getAllUser = async (_req, res) => {
    try {
        // const userData = req.body
        // const result = await User.create(userData)
        const result = await user_service_1.UserService.getAllUsersFromDb();
        res.status(200).json({
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            status: "Failed",
            message: error.message || "Error Found"
        });
        console.log(error);
    }
};
const getSingleUserById = async (req, res) => {
    try {
        const id = req.params["id"];
        // const result = await User.create(userData)
        const result = await user_service_1.UserService.getUsersByIdFromDb(id);
        res.status(200).json({
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            status: "Failed",
            message: error.message || "Error Found"
        });
        console.log(error);
    }
};
exports.UserController = { createUser, getAllUser, getSingleUserById };
//# sourceMappingURL=user.controller.js.map