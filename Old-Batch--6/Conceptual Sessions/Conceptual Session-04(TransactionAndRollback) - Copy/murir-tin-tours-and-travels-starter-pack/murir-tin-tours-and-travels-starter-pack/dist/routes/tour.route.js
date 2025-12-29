"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourRouter = void 0;
const express_1 = __importDefault(require("express"));
const tour_controller_1 = require("../controllers/tour.controller");
const router = express_1.default.Router();
router.get('/get-tours', tour_controller_1.TourController.getAllTours);
router.post('/create-tours', tour_controller_1.TourController.createTour);
router.get('/:id', tour_controller_1.TourController.getSpecificTours);
// router.patch('/update-tours/:id', TourController.updateSpecificTours)
// router.delete('/delete-tour/:id', TourController.deleteTour)
exports.TourRouter = router;
