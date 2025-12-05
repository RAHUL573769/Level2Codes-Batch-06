import { IncomingMessage, ServerResponse } from "http";
export type RouteHandler = (req: IncomingMessage, res: ServerResponse) => void;
export declare const routes: Map<string, Map<string, RouteHandler>>;
declare function addRoutes(method: string, path: string, handler: RouteHandler): void;
export default addRoutes;
//# sourceMappingURL=RouteHandleers.d.ts.map