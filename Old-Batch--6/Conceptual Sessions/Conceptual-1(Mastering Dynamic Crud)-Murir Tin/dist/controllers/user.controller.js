"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_model_1 = require("../Model/user.model");
const createUser = async (req, res) => {
    try {
        const userData = req.body;
        const result = await user_model_1.User.create(userData);
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
exports.UserController = { createUser };
//# sourceMappingURL=user.controller.js.map