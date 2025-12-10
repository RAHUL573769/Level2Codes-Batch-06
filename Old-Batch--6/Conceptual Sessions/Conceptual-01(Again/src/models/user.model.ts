import { model, Schema } from "mongoose";
import IUser from "../interface/user.interface";

const userSchema = new Schema<IUser>({

    name: {
        type: String,
        required: [true, "Please  Tell MeYour Name"]
    },
    age: {
        type: Number, required: [true, "Please  Tell MeYour Age"]
    },
    email: {

        type: String,
        unique: true,
        required: [true, "Please Tell Me Your Name"],
        lowercase: true
    },
    photo: {
        type: String
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    userStatus: {

        type: String,
        enum: ["active", "inactive"]
    }

})
const User = model<IUser>("User", userSchema)

export default User