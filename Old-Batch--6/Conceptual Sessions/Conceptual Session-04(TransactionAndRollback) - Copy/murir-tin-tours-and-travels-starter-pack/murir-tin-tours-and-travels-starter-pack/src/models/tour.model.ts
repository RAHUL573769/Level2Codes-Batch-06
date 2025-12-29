/* eslint-disable no-undef */
import { model, Schema } from 'mongoose'
import { ITour, ITourMethods, TTourModel } from '../interface/tour.interface'
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-var
var slugify = require('slugify')

const tourSchema = new Schema<ITour, TTourModel, ITourMethods>(
  {
    name: { type: String, required: true },
    durationHours: { type: Number },
    price: { type: Number },
    createdAt: { type: Date },
    imageCover: { type: String },
    images: [String],
    location: [String],
    ratingAverage: { type: Number },
    ratingQuantity: { type: Number },
    startDate: [Date],
    startLocation: { type: String },
    slug: { type: String },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } },
)

tourSchema.virtual('durationDays').get(function () {
  return this.durationHours / 24
})

tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true, replacement: '-' })
  next()
})

tourSchema.methods.getNearestStartDateAndEndDate = function (): {
  NearestStartDate: Date
  estimatedEndDate: Date
} {
  const today = new Date()
  const futureDates = this.startDate.filter((x: Date) => {
    return x > today
  })

  futureDates.sort((a: Date, b: Date) => a.getTime() - b.getTime())
  const NearestStartDate = futureDates[0]

  const estimatedEndDate = new Date(
    NearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000,
  )

  return {
    NearestStartDate,
    estimatedEndDate,
  }
}

const Tour = model<ITour, TTourModel>('Tour', tourSchema)
export default Tour
