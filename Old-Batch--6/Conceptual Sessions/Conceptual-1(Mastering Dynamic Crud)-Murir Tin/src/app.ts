import express, { Application, Request, Response, NextFunction } from "express";
import { userRouter } from "./routes/user.routes";
import cors from "cors"
import globalRouter from "./routes";
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

app.use((err: any, res: Response, next: NextFunction) => {

    const statusCode = err.statusCode || 500
    const message = err.message || "Something Went Wrong"
    const status = err.status || "ERROR"
    res.status(statusCode).json({

        message,
        status,

    })
    next()
})
export default app;
