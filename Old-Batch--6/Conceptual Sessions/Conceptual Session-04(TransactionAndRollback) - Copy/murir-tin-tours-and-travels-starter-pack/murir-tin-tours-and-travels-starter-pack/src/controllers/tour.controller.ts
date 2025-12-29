/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { TourServices } from '../services/tour.services'

const createTour = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const data = await TourServices.createTour(userData)

    res.status(200).json({
      message: 'Tour Data Created',
      status: 'Success',
      data: data,
    })
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      status: 'Failed',
    })
  }
}

const getAllTours = async (req: Request, res: Response) => {
  try {
    const getTours = await TourServices.getTour()

    res.status(200).json({
      message: 'Tour Data Fetched',
      status: 'Success',
      data: getTours,
    })
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      status: 'Failed To get Data',
    })
  }
}

const getSpecificTours = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const data = await TourServices.getSingleTour(id)

    res.status(200).json({
      message: 'Single Tour Data Fetched',
      status: 'Success',
      data: data,
    })
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      status: 'Failed To get Single Data',
    })
  }
}

export const TourController = { createTour, getAllTours, getSpecificTours }
