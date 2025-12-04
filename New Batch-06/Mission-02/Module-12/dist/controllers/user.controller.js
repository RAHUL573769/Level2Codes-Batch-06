"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
const createUsers = async (req, res) => {
    const { name, email } = req.body;
    try {
        const result = user_service_1.UserServices.createUserIntoDb(name, email);
        return res.status(200).json({
            success: true,
            data: (await result).rows[0],
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
};
const getUsers = async (req, res) => {
    try {
        const result = await user_service_1.UserServices.getUsersFromDb(req.params.id);
        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        return res.status(200).json({
            success: true,
            data: result.rows[0]
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: "Server error" });
    }
};
exports.UserController = {
    createUsers, getUsers
};
