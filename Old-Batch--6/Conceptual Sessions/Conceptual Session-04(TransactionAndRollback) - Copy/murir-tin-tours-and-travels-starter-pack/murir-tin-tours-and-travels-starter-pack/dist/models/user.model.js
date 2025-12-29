"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter User Name'],
        unique: true,
    },
    age: { type: Number },
    email: { type: String, unique: true, lowercase: true },
    photo: {
        type: String,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    userStatus: {
        type: String,
        enum: ['active', 'in-active'],
    },
});
//Pre hook for query middleware
// userSchema.pre('find', function (next) {
//   this.find({ userStatus: { $eq: 'active' } })
//   next()
// })
userSchema.pre(/^find/, function (next) {
    this.find({ role: { $eq: 'user' } });
    next();
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
