import express, { Request, Response } from 'express'
import { initDb } from './database/database'


const app = express()
const port = 3000


//database
initDb()
//parsers
app.use(express.json())
app.get('/', (req: Request, res: Response) => {
    res.send(`Hello World!'  from ${req.path}`)
})
app.post("/", (req: Request, res: Response) => {

    res.status(200).json({
        message: "Addeed",
        path: req.path
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
