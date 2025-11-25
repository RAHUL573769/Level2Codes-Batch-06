"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const student_service_1 = require("./student.service");
const createStudent = async (req, res) => {
    const studentData = req.body;
    const result = await student_service_1.StudentService.createStudentIntoDb(studentData);
    res.status(200).json({
        message: "",
        status: 200,
        data: result,
    });
};
exports.StudentController = { createStudent };
//# sourceMappingURL=student.controller.js.map