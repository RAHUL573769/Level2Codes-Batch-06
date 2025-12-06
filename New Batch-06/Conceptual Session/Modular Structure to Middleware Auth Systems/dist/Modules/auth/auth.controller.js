"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("./auth.service");
const login = async (req, res) => {
    try {
        const result = await auth_service_1.AuthService.loginInToDb(req.body.email, req.body.password);
        console.log("RES", result);
        return res.status(200).json({
            data: {
                user: result.user,
                token: result.token
            }
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Login failed",
            error
        });
    }
};
exports.AuthController = { login };
//# sourceMappingURL=auth.controller.js.map