import mongoose from "mongoose"
import { TErrorIssue, TErrorResponse } from "../../types/TErrorRespose"

export const handleValidationError = (err: mongoose.Error.ValidationError): TErrorResponse => {

    // let validationError: TErrorResponse

    const issues: TErrorIssue[] = []
    const errorValues = Object.values(err.errors)
    errorValues.map((errorObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
        issues.push({
            path: errorObj.path,
            message: errorObj.message

        })
    })

    return { statusCode: 400, status: "Failed", message: "Failed", issues }

}




// import mongoose from 'mongoose'
// import { TErrorIssue, TErrorResponse } from '../../types/TErrorResponse'

// const handleValidationError = (
//   err: mongoose.Error.ValidationError,
// ): TErrorResponse => {
//   const errorValues = Object.values(err.errors)
//   const issues: TErrorIssue[] = []
//   errorValues.forEach((errObj) => {
//     issues.push({
//       path: errObj.path,
//       message: errObj.message,
//     })
//   })

//   return {
//     statusCode: 400,
//     status: 'error',
//     message: 'Validation Error',
//     issues,
//   }
// }

// export default handleValidationError