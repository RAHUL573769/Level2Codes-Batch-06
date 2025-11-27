import mongoose from "mongoose";
import IUser from "../interface/user.interface";
export declare const User: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any, IUser>;
//# sourceMappingURL=user.model.d.ts.map