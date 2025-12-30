export type TErrorResponse = {
    message: string
    status: string
    statusCode: number
    // issues: [
    //     {
    //         path: string,
    //         message: string,
    //         kind: string,
    //         stack: string
    //     }
    // ]
    issues: TErrorIssues[]
}


export type TErrorIssues = {
    path: string,
    message: string,
    kind: string,
    stack: string
}