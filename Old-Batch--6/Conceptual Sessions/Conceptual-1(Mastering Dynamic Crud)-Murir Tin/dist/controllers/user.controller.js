"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
// import { User } from "../Model/user.model";
const user_service_1 = require("../services/user.service");
const sendResponse = (res, payload) => {
    res.status(payload.statusCode).json({
        status: payload.status,
        message: payload.message,
        data: payload.data ?? null
    });
};
const createUser = async (req, res) => {
    try {
        const userData = req.body;
        // const result = await User.create(userData)
        const result = await user_service_1.UserService.createUserIntoDb(userData);
        sendResponse(res, {
            statusCode: 201,
            status: "Success",
            message: "User Created Successfully",
            data: result
        });
        // res.status(200).json({
        //     data: result
        // })
    }
    catch (error) {
        res.status(500).json({
            status: "Failed",
            message: error.message || "Error Found"
        });
        console.log(error);
    }
};
const getAllUser = async (_req, res, next) => {
    try {
        // const userData = req.body
        // const result = await User.create(userData)
        const result = await user_service_1.UserService.getAllUsersFromDb();
        throw new Error("Somethinf");
        res.status(200).json({
            data: result
        });
    }
    catch (error) {
        // res.status(500).json({
        //     status: "Failed",
        //     message: error.message || "Error Found"
        // })
        next(error);
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