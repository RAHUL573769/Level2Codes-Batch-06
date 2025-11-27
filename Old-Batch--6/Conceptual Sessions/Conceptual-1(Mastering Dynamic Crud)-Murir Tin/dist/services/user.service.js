"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = require("../Model/user.model");
const createUserIntoDb = async (userData) => {
    const data = await user_model_1.User.create(userData);
    return data;
};
const getAllUsersFromDb = async () => {
    const data = await user_model_1.User.find();
    return data;
};
const getUsersByIdFromDb = async (id) => {
    const data = await user_model_1.User.findById(id);
    return data;
};
const updateUserInDb = async (id, userData) => {
    const result = await user_model_1.User.findByIdAndUpdate(id, userData, {
        new: true,
        runValidators: true
    });
    return result;
};
const deleteUserFromDb = async (id) => {
    const result = await user_model_1.User.findByIdAndDelete(id);
    return result;
};
exports.UserService = { deleteUserFromDb, updateUserInDb, createUserIntoDb, getAllUsersFromDb, getUsersByIdFromDb };
//# sourceMappingURL=user.service.js.map