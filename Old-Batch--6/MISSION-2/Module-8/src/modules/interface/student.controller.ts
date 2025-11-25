import { Request, Response } from "express";
import { StudentService } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  const studentData = req.body;
  const result = await StudentService.createStudentIntoDb(studentData);
  res.status(200).json({
    message: "",
    status: 200,
    data: result,
  });
};

export const StudentController = { createStudent };
