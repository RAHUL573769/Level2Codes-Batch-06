"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_services_1 = require("./user.services");
const createUser = async (req, res) => {
    try {
        const result = await user_services_1.UserServices.createUserIntoDb(req.body);
        return res.status(200).json({
            success: true,
            message: "User Created",
            data: result.rows[0]
        });
    }
    catch (error) {
        return console.log(error);
    }
};
exports.UserController = { createUser };
//# sourceMappingURL=user.controller.js.map