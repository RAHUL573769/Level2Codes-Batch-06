
import express, { Request, Response } from "express"
import { pool } from "../database/db"

const router = express.Router()
router.post("/", async (req: Request, res: Response) => {
    try {

        const { name, email, password } = req.body
        const result = await pool.query(`INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING *
        `, [name, email, password])

        res.status(200).json({
            success: true,
            message: "User Created",
            data: result.rows[0]
        })



    } catch (error) {
        console.log(error)
    }


})

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


