interface ITour {

    name: string
    duration: number
    ratingAverage: number
    ratingQuantity: number
    price: number
    imageCover: string
    images: string[]
    createdAt: Date
    startDate: Date[]
    startLocation: string
    locations: string[]
}

export default ITour