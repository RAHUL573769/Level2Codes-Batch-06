export type TErrorResponse = {
    statusCode: number;
    status: "Error" | "Failed";
    message: string;
    issues: TErrorIssue[];
};
export type TErrorIssue = {
    path: string | number;
    message: string;
};
//# sourceMappingURL=TErrorRespose.d.ts.map