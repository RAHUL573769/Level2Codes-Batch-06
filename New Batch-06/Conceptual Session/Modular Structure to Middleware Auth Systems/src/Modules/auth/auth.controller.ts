import { AuthService } from "./auth.service";
import { Request, Response } from "express";

const login = async (req: Request, res: Response) => {
    try {
        const result = await AuthService.loginInToDb(
            req.body.email,
            req.body.password
        );

        console.log("RES", result);

        return res.status(200).json({
            data: {
                user: result.user,
                token: result.token
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Login failed",
            error
        });
    }
};

export const AuthController = { login };
