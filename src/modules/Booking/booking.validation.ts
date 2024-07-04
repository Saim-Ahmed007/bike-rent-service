import {z} from 'zod'

const createBookingValidationSchema = z.object({
    body : z.object({
        startTime : z.string().datetime(),
        returnTime : z.string().datetime(),
        totalCost : z.number(),
        isReturned : z.boolean()
    })
})

export const BookingValidationSchema = {
    createBookingValidationSchema
}