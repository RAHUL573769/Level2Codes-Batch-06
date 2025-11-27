import IUser from "../interface/user.interface";
export declare const UserService: {
    deleteUserFromDb: (id: string) => Promise<IUser | null>;
    updateUserInDb: (id: string, userData: IUser) => Promise<(import("mongoose").Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    createUserIntoDb: (userData: IUser) => Promise<IUser>;
    getAllUsersFromDb: () => Promise<IUser[]>;
    getUsersByIdFromDb: (id: string) => Promise<IUser | null>;
};
//# sourceMappingURL=user.service.d.ts.map