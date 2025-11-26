import express, { Application, Request, Response } from "express";

const app: Application = express();

const userRouter = express.Router();
userRouter.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome To Murir Tin",
    status: "success",
  });
});

app.use("/api/v1/users", userRouter);
// app.get("/", (_req: Request, res: Response) => {
//   res.status(200).json({
//     message: "Welcome To Murir Tin",
//     status: "success",
//   });
// });
export default app;
