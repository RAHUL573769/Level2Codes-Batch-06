"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const stydent_model_1 = __importDefault(require("../../../dist/modules/interface/stydent.model"));
const createStudentIntoDb = async (student) => {
    const result = await stydent_model_1.default.create(student);
    return result;
};
exports.StudentService = { createStudentIntoDb };
//# sourceMappingURL=student.service.js.map