/* eslint-disable no-unused-vars */
import express, { NextFunction, Request, Response } from 'express'
import { userController } from '../controllers/user.controller'
import User from '../models/user.model'
import catchAsyncFunction from '../utils/catchAsync'
import { checkAuth } from '../middlewares/authentication'

const router = express.Router()


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const authenticateUser = catchAsyncFunction(async (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email
    const password = req.body.password
    const user = await User.findOne({ email, password })

    if (!user) {
        res.status(403).json({
            status: "Failed",
            message: "Ivalid User and Password"
        })
    }

    if (user?.role !== "admin") {
        res.status(403).json({
            status: "Failed",
            message: "You are  not Admin"
        })

    }

    next()
})
router.post('/create-user', userController.createUser)
router.get('/', checkAuth("admin", "user"), userController.getAllUsers)
router.get('/:id', userController.getSingleUser)
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export const userRoutes = router
