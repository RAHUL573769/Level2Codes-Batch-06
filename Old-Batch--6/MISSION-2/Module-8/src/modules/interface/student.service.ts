import StudentModel from "../../../dist/modules/interface/stydent.model";
import { IStudent } from "./student.interface";
const createStudentIntoDb = async (student: IStudent) => {
  const result = await StudentModel.create(student);
  return result;
};
export const StudentService = { createStudentIntoDb };
