import express, { NextFunction, Request, Response } from "express";
import { AuthController } from "./auth.controller";
import { auth } from "../middleware/auth";
const route = express.Router()

route.post("/login", auth("admin"), AuthController.loginUser)

export const AuthRoute = { route }