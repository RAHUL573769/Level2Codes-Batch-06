"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tourSchema = new mongoose_1.Schema({
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
});
const Tour = (0, mongoose_1.model)("Tour", tourSchema);
exports.default = Tour;
//# sourceMappingURL=tour.mdel.js.map