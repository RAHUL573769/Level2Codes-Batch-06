import { IStudent } from "./student.interface";
declare const StudentModel: import("mongoose").Model<IStudent, {}, {}, {}, import("mongoose").Document<unknown, {}, IStudent, {}, import("mongoose").DefaultSchemaOptions> & IStudent & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, IStudent>;
export default StudentModel;
//# sourceMappingURL=stydent.model.d.ts.map