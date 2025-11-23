import express, { Request, Response } from "express";

const app = express();
app.use(express.json());
app.get("/", (_req: Request, res: Response) => {
  res.send("Hello From Js");
});
app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("Hello From Js");
});
export default app;
