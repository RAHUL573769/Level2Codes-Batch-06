"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GuardianSchema = new mongoose_1.Schema({
    fatherName: {
        type: String,
    },
    fatherOccupation: { type: String },
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
    gender: {
        type: String,
        enum: ["male", "female"],
    },
    dateOfBirth: { type: String },
    email: { type: String },
    contactNumber: { type: String },
    permanentAddress: { type: String },
    presentAddress: { type: String },
    guardian: GuardianSchema,
});
const StudentModel = (0, mongoose_1.model)("Student", studentSchema);
exports.default = StudentModel;
//# sourceMappingURL=stydent.model.js.map