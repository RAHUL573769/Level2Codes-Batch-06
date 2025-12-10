import { Request, Response } from "express";
import IUser from "../interface/user.interface";
export declare const UserController: {
    updateUser: (id: string, userData: IUser) => Promise<(import("mongoose").Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    createUser: (req: Request, res: Response) => Promise<void>;
    getAllUser: () => Promise<IUser[]>;
    getSingleUser: (id: string) => Promise<IUser | null>;
};
//# sourceMappingURL=user.controller.d.ts.map