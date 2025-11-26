import mongoose, { Schema } from "mongoose";
import IUser from "../interface/user.interface";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, "Name is Required"]
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true,
        lowercase: true
    },
    photo: {
        type: String
    },
    role: {
        type: String,
        enum: ['user', "admin"],
        default: "user"
    },
    userStatus: { type: String, enum: ["active", "inactive"], default: "active" }
})

export const User = mongoose.model('User', userSchema);