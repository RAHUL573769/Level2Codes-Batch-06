
import express from "express";
import { userRouter } from "./user.routes";

const globalRouter = express.Router()




globalRouter.use("/", userRouter)
globalRouter.use("/users", userRouter)


const routes = [

    {
        path: "/",
        route: userRouter
    }
]

routes.forEach((item: any) => {

    globalRouter.use(item.path, item.route)
})

export default globalRouter