"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const users_conststs_1 = require("../constants/users.conststs");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name'],
        unique: true
    },
    age: {
        type: Number,
        required: [true, 'Please tell us your age'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please tell us your email'],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Please tell us your password'],
    },
    passwordChamgedAt: {
        type: Date,
        default: null
    },
    photo: String,
    role: {
        type: String,
        enum: Object.values(users_conststs_1.USER_ROLE),
        default: 'user',
    },
    userStatus: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
}, {
    timestamps: true //creates created at
});
//Pre Hook for Query Middleware
userSchema.pre(/^find/, function (next) {
    this.find({ userStatus: { $eq: 'active' } });
    next();
});
// userSchema.pre("findOne", function (next) {
//     this.findOne({userStatus : { $eq : "active"}})
//     next()
// });
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
