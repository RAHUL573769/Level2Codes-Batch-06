import { Request, Response } from "express";
import IUser from "../interface/user.interface";
import mongoose from "mongoose";
export declare const UserController: {
    updateUser: (req: Request, res: Response) => Promise<(mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }) | Response<any, Record<string, any>> | null>;
    createUser: (req: Request, res: Response) => Promise<void>;
    getAllUser: () => Promise<IUser[]>;
    getSingleUser: (id: string) => Promise<IUser | null>;
};
//# sourceMappingURL=user.controller.d.ts.map