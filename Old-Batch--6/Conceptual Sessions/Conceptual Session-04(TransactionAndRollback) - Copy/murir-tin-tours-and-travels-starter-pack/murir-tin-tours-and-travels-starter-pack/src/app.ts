import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { UserRouter } from './routes/user.route'
import { TourRouter } from './routes/tour.route'
const app: Application = express()

// const userRouter = express.Router()
app.use(cors())
app.use(express.json())
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// app.get('/api/v1/users', (req: Request, res: Response) => {
//   const users = [
//     {
//       id: 1,
//       name: 'Rahul',
//       email: 'rahul@gmail.com',
//     },
//   ]

//   res.status(200).json({
//     message: 'User Data Fetched Successfully',
//     status: 'Success',
//     data: users,
//   })
// })
// app.use('/api/v1', userRouter)
app.use('/api/v1/users', UserRouter)

app.use('/api/v1/tours', TourRouter)

// userRouter.get('/users')

export default app
