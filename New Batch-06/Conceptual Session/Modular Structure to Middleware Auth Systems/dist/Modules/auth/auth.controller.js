"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("./auth.service");
const login = async (req, _res) => {
    try {
        const result = await auth_service_1.AuthService.loginInToDb(req.body.email, req.body.password);
        console.log('RES', result);
        return {
            user: result.user,
            token: result.token
        };
    }
    catch (error) {
        return (error);
    }
};
exports.AuthController = { login };
//# sourceMappingURL=auth.controller.js.map