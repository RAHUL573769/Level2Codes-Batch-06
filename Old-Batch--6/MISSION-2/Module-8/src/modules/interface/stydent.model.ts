import { model, Schema } from "mongoose";
import { GuardianSchema1, IStudent } from "./student.interface";

const GuardianSchema = new Schema<GuardianSchema1>({
  fatherName: {
    type: String,
  },
  fatherOccupation: { type: String },
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

const StudentModel = model<IStudent>("Student", studentSchema);
export default StudentModel;
