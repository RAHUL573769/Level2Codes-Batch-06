import { model, Schema } from "mongoose";
import { IStudent, UserName } from "./student.interface";

const userSchema = new Schema<UserName>({
  firstName: { type: String },
  middleName: { type: String },
  lastName: { type: String },
});
const studentSchema = new Schema<IStudent>({
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

export const StudentModel = model<IStudent>("User", studentSchema);

//   fatherName: string;
//   fatherOccupation: string;
