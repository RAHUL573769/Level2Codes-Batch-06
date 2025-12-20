import express, { Application, } from "express";
import cors from "cors"
import globalRouter from "./routes";
import { globalErrorHandler } from "./types/globalErrorHandler";
// import { notFoundController } from "./controllers/notFoud.controller";
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
app.use("/main", globalRouter)
// app.use("/api/v1/users", userRouter)

// app.get(Controller.notFound)"*", notFound

app.use(globalErrorHandler)
export default app;
