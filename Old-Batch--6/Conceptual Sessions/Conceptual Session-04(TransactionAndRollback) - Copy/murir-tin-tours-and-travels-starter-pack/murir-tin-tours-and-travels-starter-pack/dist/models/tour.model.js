"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
const mongoose_1 = require("mongoose");
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-var
var slugify = require('slugify');
const tourSchema = new mongoose_1.Schema({
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
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });
tourSchema.virtual('durationDays').get(function () {
    return this.durationHours / 24;
});
tourSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true, replacement: '-' });
    next();
});
tourSchema.methods.getNearestStartDateAndEndDate = function () {
    const today = new Date();
    const futureDates = this.startDate.filter((x) => {
        return x > today;
    });
    futureDates.sort((a, b) => a.getTime() - b.getTime());
    const NearestStartDate = futureDates[0];
    const estimatedEndDate = new Date(NearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000);
    return {
        NearestStartDate,
        estimatedEndDate,
    };
};
const Tour = (0, mongoose_1.model)('Tour', tourSchema);
exports.default = Tour;
