"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourController = void 0;
const tour_services_1 = require("../services/tour.services");
const createTour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const data = yield tour_services_1.TourServices.createTour(userData);
        res.status(200).json({
            message: 'Tour Data Created',
            status: 'Success',
            data: data,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
            status: 'Failed',
        });
    }
});
const getAllTours = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getTours = yield tour_services_1.TourServices.getTour();
        res.status(200).json({
            message: 'Tour Data Fetched',
            status: 'Success',
            data: getTours,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
            status: 'Failed To get Data',
        });
    }
});
const getSpecificTours = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield tour_services_1.TourServices.getSingleTour(id);
        res.status(200).json({
            message: 'Single Tour Data Fetched',
            status: 'Success',
            data: data,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
            status: 'Failed To get Single Data',
        });
    }
});
exports.TourController = { createTour, getAllTours, getSpecificTours };
