"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    firstName: { type: String },
    middleName: { type: String },
    lastName: { type: String },
});
const studentSchema = new mongoose_1.Schema({
    id: { type: String },
    name: {
        firstName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,
        },
        lastName: { type: String },
    },
    gender: ["male", "female"],
    dateOfBirth: { type: String },
    email: { type: String },
    contactNumber: { type: String },
    permanentAddress: { type: String },
    presentAddress: { type: String },
    guardian: {
        fatherName: { type: String },
        fatherOccupation: { type: String },
    },
});
exports.StudentModel = (0, mongoose_1.model)("User", studentSchema);
//   fatherName: string;
//   fatherOccupation: string;
//# sourceMappingURL=stydent.model.js.map