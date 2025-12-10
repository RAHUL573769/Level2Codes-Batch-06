import IUser from "../interface/user.interface";
declare const User: import("mongoose").Model<IUser, {}, {}, {}, import("mongoose").Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, IUser>;
export default User;
//# sourceMappingURL=user.model.d.ts.map