import IUser from "../interface/user.interface";
import { User } from '../Model/user.model';

const createUserIntoDb = async (userData: IUser): Promise<IUser> => {

    const data = await User.create(userData)
    return data

}

const getAllUsersFromDb = async (): Promise<IUser[]> => {

    const data = await User.find()
    return data

}
const getUsersByIdFromDb = async (id: string): Promise<IUser | null> => {
    const data = await User.findById(id)
    return data
}
const updateUserInDb = async (id: string, userData: IUser) => {
    const result = await User.findByIdAndUpdate(id, userData, {
        new: true,
        runValidators: true
    })
    return result
}

const deleteUserFromDb = async (id: string): Promise<IUser | null> => {
    const result = await User.findByIdAndDelete(id)
    return result
}
export const UserService = { deleteUserFromDb, updateUserInDb, createUserIntoDb, getAllUsersFromDb, getUsersByIdFromDb }
