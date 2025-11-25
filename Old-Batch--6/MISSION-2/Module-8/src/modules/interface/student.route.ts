import express from "express";
import { StudentController } from "./student.controller";
const router = express.Router();
router.post("/create-user", StudentController.createStudent);
export const StudentRouter = router;
