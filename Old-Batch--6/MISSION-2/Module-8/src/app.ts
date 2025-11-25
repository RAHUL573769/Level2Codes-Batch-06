import express, { Request, Response } from "express";
import { StudentRouter } from "./modules/interface/student.route";
const app = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/create-user", StudentRouter);
export default app;
