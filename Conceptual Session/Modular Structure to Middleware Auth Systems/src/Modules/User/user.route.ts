
import express, { Request, Response } from "express"
import { pool } from "../database/db"
import { UserController } from "./user.controller"
import { verify } from "../middlewares/verify"

const router = express.Router()
router.post("/", verify, UserController.createUser)

router.post("/users", async (req: Request, res: Response) => {
    const body = req.body
    console.log(body)

    res.status(200).json({
        message: "This is User Route",
        path: req.path
    })
})

router.post("/", async (req, res) => {
    const { name, email, password } = req.body
    const result = await pool.query(`
        INSERT  INTO users(name,email,password) VALUES ($1,$2,$3)
        RETURNING *
        
        `, [name, email, password])

    console.log(result)
    res.status(200).json({
        message: "USER DB CREATED",
        path: req.path,
        data: result
    })

})
export const UserRouters = router


