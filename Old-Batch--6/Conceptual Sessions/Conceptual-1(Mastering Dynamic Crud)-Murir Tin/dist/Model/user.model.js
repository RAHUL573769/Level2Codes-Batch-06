"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
});
// userSchema.pre("find", function (this: Query<IUser, Document>, next) {
//     this.find({ userStatus: "active" });
//     next();
// });
exports.User = (0, mongoose_1.model)('User', userSchema);
// function next() {
//     throw new Error("Function not implemented.");
// }
//# sourceMappingURL=user.model.js.map