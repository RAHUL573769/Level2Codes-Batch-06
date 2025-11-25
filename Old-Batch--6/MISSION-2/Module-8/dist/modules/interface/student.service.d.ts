import { IStudent } from "./student.interface";
export declare const StudentService: {
    createStudentIntoDb: (student: IStudent) => Promise<import("mongoose").Document<unknown, {}, import("../../../dist/modules/interface/student.interface").IStudent, {}, import("mongoose").DefaultSchemaOptions> & import("../../../dist/modules/interface/student.interface").IStudent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
};
//# sourceMappingURL=student.service.d.ts.map