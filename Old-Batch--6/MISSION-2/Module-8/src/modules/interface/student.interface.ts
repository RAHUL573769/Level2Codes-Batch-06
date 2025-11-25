export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type GuardianSchema1 = {
  fatherName: string;
  fatherOccupation: string;
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
  guardian: GuardianSchema1;
  isActive: "active" | "blocked";
};
