import IUser from "../interface/user.interface";
export declare const UserService: {
    deleteUserFromDb: (id: string) => Promise<IUser | null>;
    updateUserInDb: (id: string, userData: IUser) => Promise<(import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>;
    createUserIntoDb: (userData: IUser) => Promise<IUser>;
    getAllUsersFromDb: () => Promise<IUser[]>;
    getUsersByIdFromDb: (id: string) => Promise<IUser | null>;
};
//# sourceMappingURL=user.service.d.ts.map