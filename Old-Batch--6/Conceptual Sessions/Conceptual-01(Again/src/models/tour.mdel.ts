import { model, Schema } from "mongoose";
import ITour from "../interface/tour.interface";


const tourSchema = new Schema<ITour>({

    name: {
        type: String,
        required: [true, "TOUR Name is Needed"]
    },
    durationHours: {
        type: Number
    },
    duration: {
        type: Number
    },
    ratingAverage: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number
    },
    imageCover: {
        type: String
    },
    images: {
        type: [String]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    startDate: [Date],
    locations: [String],
    startLocation: {
        type: String
    }

})

const Tour = model<ITour>("Tour", tourSchema)
export default Tour