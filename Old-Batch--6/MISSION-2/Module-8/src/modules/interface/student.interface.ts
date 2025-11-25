import { Schema, model, connect } from "mongoose";

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type IStudent = {
  id: string;
  name: UserName;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: {
    fatherName: string;
    fatherOccupation: string;
  };
  isActive: "active" | "blocked";
};
