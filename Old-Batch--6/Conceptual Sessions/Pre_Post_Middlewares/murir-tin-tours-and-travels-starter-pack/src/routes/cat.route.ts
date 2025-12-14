import express from 'express'
import { CatController } from '../controllers/cat.controllers'
const router = express.Router()

router.post('/create-router', CatController.createCatController)

router.get('/', CatController.getCatController)

export const catRouter = router
