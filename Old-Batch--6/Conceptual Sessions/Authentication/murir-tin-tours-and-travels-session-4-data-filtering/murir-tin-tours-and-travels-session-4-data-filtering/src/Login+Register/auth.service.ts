import { IUser } from "../interfaces/user.interface";
import User from "../models/user.model";
import jwt, { JwtPayload } from 'jsonwebtoken';
interface IRegister
    extends Omit<
        IUser,
        "userStatus" | "role" | "passwordChamgedAt" | "photo"
    > { }

interface ILogin {
    email: string
    password: string
}
const register = async (payload: IRegister) => {

    const result = await User.create({ ...payload, userStatus: "active" })
    return result


};
const login = async (payload: ILogin) => {
    const result = await User.findOne(payload)
    if (!result) {
        throw new Error("Invalid Credentials")
    }

    const payload1: JwtPayload = {
        email: result.email,
        role: result.role
    }
    const token = jwt.sign(payload1, "qwertyuiop", { expiresIn: "1d" })
    console.log(token)
    // return null

    return { accessToken: token }
};



export const authServices = { login, register };
