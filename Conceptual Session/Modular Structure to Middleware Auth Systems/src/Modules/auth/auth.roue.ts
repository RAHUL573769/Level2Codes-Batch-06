import express from "express"


import { AuthController } from "./auth.controller"
import { auth } from "../middlewares/auth"

const router = express.Router()

router.post("/login", auth("User", "Admin"), AuthController.login)

// router.post("/login", AuthController.login)

export const AuthRoute = router


