import express, { Request, Response } from "express"
import { initDb, pool } from "../Modules/database/db"
import { UserRouters } from "../Modules/User/user.route"

const app = express()


app.use(express.json())

app.use("/usersDb1", UserRouters)
app.use("/users", UserRouters)



app.use("/usersDb", UserRouters)
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "This is Root Route",
        path: req.path
    })
})
initDb()
app.listen(5000, () => {
    console.log("Server is Running")
})
