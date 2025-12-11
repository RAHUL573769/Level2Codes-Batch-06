"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
});
// userSchema.pre(/^find/, function (
//     this: Query<IUser, Document>,
//     next: CallbackWithoutResultAndOptionalError,
// ) {
//     this.where({ userStatus: "active" });
// userSchema.pre(/^find/, function (this: Query<IUser, Document>, next: CallbackWithoutResultAndOptionalError) {
//     this.find({ userStatus: { $eq: "active" } });
//     next();
// });
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
//# sourceMappingURL=user.model.js.map