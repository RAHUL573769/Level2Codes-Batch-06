import { AuthService } from "./auth.service"
import { Request, Response } from 'express';

const login = async (req: Request, _res: Response) => {
    try {

        const result = await AuthService.loginInToDb(req.body.email, req.body.password)

        console.log('RES', result)
        return {
            user: result.user,
            token: result.token
        }


    } catch (error) {
        return (error)
    }

}

export const AuthController = { login }