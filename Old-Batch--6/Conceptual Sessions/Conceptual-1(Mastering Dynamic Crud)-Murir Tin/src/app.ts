import express, { Application } from "express";
import { userRouter } from "./routes/user.routes";
import cors from "cors"
const app: Application = express();
app.use(express.json())
app.use(cors())
// const userRouter = express.Router();
// userRouter.get("/", (_req: Request, res: Response) => {
//   res.status(200).json({
//     message: "Welcome To Murir Tin",
//     status: "success",
//   });
// });

// app.use("/api/v1/users", userRouter);
app.use("/", userRouter)
app.use("/api/v1/users", userRouter)

export default app;
