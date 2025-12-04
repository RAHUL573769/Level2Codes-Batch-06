import express, { Request, Response } from 'express';
import { pool } from '../database/database';
import { UserController } from '../controllers/user.controller';
const router = express.Router()


router.get("/",)








router.post("/create-users", UserController.createUsers);



export const UserRoute = router 