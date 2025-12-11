"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    review: {
        type: String,
        required: [true, "Review cannot be empty"],
        trim: true,
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"],
        min: [1, "Rating must be at least 1"],
        max: [5, "Rating must be at most 5"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    tour: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Tour",
        required: [true, "A review must belong to a tour"],
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "A review must belong to a user"],
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
// -------- Optional: Populate user info --------
// reviewSchema.pre(/^find/, function (next) {
//     this.populate({
//         path: "user",
//         select: "name email",
//     });
//     next();
// });
exports.Review = (0, mongoose_1.model)("Review", reviewSchema);
//# sourceMappingURL=review.model.js.map