import IUser from "../interface/user.interface";
import User from "../models/user.model";

const createUserIntoDb = async (data: IUser): Promise<IUser> => {


    const result = await User.create(data)

    return result
}

export const UserServices = { createUserIntoDb }