import express from 'express'
import { TourController } from '../controllers/tour.controller'
const router = express.Router()

router.get('/get-tours', TourController.getAllTours)
router.post('/create-tours', TourController.createTour)
router.get('/:id', TourController.getSpecificTours)
// router.patch('/update-tours/:id', TourController.updateSpecificTours)
// router.delete('/delete-tour/:id', TourController.deleteTour)

export const TourRouter = router
