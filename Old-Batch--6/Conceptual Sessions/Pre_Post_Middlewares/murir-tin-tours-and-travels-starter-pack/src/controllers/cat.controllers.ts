/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { CatServices } from '../services/cat.services'

const createCatController = async (req: Request, res: Response) => {
  try {
    const data = req.body

    const data1 = await CatServices.addCat(data)

    res.status(200).json({
      message: 'Cat Data Created',
      success: true,
      data: data1,
    })
  } catch (error: any) {
    res.status(500).json({
      message: error.message || 'Something went Wrong',
      success: false,
      error: error,
    })
  }
}

const getCatController = async (req: Request, res: Response) => {
  try {
    const data = await CatServices.getCat()
    // console.log(data)
    res.status(200).json({
      message: 'Cat Data Created',
      success: true,
      data: data,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Fetched Failed',
      status: false,
      error: error,
    })
  }
}

export const CatController = { createCatController, getCatController }
