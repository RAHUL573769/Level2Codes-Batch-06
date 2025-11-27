import mongoose, { model, Query, Schema } from "mongoose";
import IUser from "../interface/user.interface";
import { CallbackWithoutResultAndOptionalError } from "mongoose";
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
// userSchema.pre("find", function (this: Query<IUser, Document>, next) {
//     this.find({ userStatus: "active" });
//     next();
// });

export const User = model<IUser>('User', userSchema);

// function next() {
//     throw new Error("Function not implemented.");
// }
