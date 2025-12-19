import { NextFunction, Request, Response } from "express";
export declare const UserController: {
    createUser: (req: Request, res: Response) => Promise<void>;
    getAllUser: (_req: Request, res: Response, next: NextFunction) => Promise<void>;
    getSingleUserById: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=user.controller.d.ts.map