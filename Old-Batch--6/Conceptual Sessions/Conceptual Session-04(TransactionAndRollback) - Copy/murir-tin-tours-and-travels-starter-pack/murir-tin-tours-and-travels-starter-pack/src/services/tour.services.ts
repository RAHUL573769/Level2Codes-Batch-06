import { ITour } from '../interface/tour.interface'
import Tour from '../models/tour.model'

const createTour = async (tourData: ITour): Promise<ITour> => {
  const result = await Tour.create(tourData)
  return result
}
const getTour = async (): Promise<ITour[]> => {
  const result = await Tour.find()
  return result
}

const getSingleTour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findById(id)
  return result
}

export const TourServices = { createTour, getTour, getSingleTour }
