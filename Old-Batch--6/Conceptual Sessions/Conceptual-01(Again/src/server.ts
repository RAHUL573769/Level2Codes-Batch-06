
import express, { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import config from './config'
import { UserRouter } from './routes/user.route'
import cors from "cors"
const app = express()

app.use(express.json())
app.use(cors())
async function server() {

    try {

        await mongoose.connect(config.DB_LOCAL)
        app.get('/', (req: Request, res: Response) => {
            // app.use("/api/v1/users", UserRouter)

            res.status(200).json({

                req: req.path,
                message: "Welcome to Murir Tin",
                status: "success"
            })
        })



        app.use("/api/v1/users", UserRouter)


        app.use((err: any, req: Request, res: Response, next: NextFunction) => {


        })

        app.listen(config.PORT, () => {
            console.log(`Example app listening on port ${config.PORT}`)
        })


    } catch (error: any) {
        console.log(error)
    }
}

server().catch((error: any) => {
    console.log(error)
})
