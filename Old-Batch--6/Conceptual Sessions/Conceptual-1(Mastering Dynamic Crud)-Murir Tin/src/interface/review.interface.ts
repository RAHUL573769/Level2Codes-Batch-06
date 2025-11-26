import { Schema } from "mongoose"

interface IReview {

    review: string
    rating: string

    createdAt: Date
    tour: Schema.Types.ObjectId
    user: Schema.Types.ObjectId

}

export default IReview