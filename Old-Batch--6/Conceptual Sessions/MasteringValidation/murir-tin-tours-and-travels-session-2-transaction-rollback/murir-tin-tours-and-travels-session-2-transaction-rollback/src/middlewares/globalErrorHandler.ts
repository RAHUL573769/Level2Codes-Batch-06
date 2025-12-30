/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

import e, { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import { TErrorResponse } from '../types/TErrorRespose'
import path from 'path';
import { handleValidationError } from '../helpers/errorHelpers';

/* eslint-disable @typescript-eslint/no-explicit-any */
const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let errorResponse: TErrorResponse = {
    message: err.message || "Something wwent Wrong",
    status: err.status || "Error ",
    statusCode: 400,
    issues: err.issues || []

  }
  // let statusCode = err.statusCode || 500
  // let message = err.message || 'Something went wrong'
  // let status = err.status || 'error'
  // console.log(err)

  if (err.name && err instanceof mongoose.Error.ValidationError) {
    console.log("Ami Validation Error")

    errorResponse = handleValidationError(err)

  // errorResponse.statusCode = 400
  // errorResponse.message = "Validation Error Found"
  // errorResponse.status = "Failed"
  // const errorValues = Object.values(err.errors)


  // errorValues.map((errorObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
  //   errorResponse.issues.push({
  //     path: errorObj.path,
  //     message: errorObj.message,
  //     kind: errorObj.kind,
  //     stack: errorObj.stack as string
  //   })
  // })
  // statusCode = 400
  // message = "Validation Error Found"
  // status = "Error"

    // console.log("Error Values", errorValues)
    // errorResponse.issues = []
  }
  res.status(errorResponse.statusCode).json({
    status: errorResponse.status,
    message: errorResponse.message,
    issues: errorResponse.issues,
    error: err
  })
}

export default globalErrorHandler
