import { Response } from "express";
type ISuccessResponse<T> = {
    statusCode: number;
    status: "Success" | "Fail" | "Error";
    message: string;
    data?: T | null;
};
export declare const sendResponse: <T>(res: Response, payload: ISuccessResponse<T>) => void;
export {};
//# sourceMappingURL=utils.d.ts.map