import express, { Request, Response } from "express";
import logger from "./middlewares/logger";

const app = express();

const userRouter = express.Router();
app.use(express.json());
app.use(userRouter);

userRouter.get("/api/v1", (req: Request, res: Response) => {
  const user = req.body;
  res.json({
    message: "User Data Created",
    success: true,
    data: user,
  });
});

userRouter.get("/", logger, (_req: Request, res: Response) => {
  res.send("Hello From Js");
});
app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "Succcesfully Received Data",
  });
});
export default app;
