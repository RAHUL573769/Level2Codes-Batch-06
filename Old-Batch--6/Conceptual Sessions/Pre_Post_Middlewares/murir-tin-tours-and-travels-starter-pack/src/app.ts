import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { catRouter } from './routes/cat.route'
const app: Application = express()
app.use(cors())
app.use(express.json())

app.use('/create', catRouter)

app.use('/', catRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
export default app
