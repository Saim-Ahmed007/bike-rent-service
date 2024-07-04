import express from 'express'
import { BookingController } from './booking.controller'
import validateRequest from '../../app/middlewares/validateRequest'
import { BookingValidationSchema } from './booking.validation'
import auth from '../../app/middlewares/auth'

const router = express.Router()
router.post('/create-rental',auth(), validateRequest(BookingValidationSchema.createBookingValidationSchema), BookingController.createRental)

router.get('/', auth(), BookingController.getAllRentals)
router.put('/:id/return', BookingController.returnBike)

export const BookingRoutes = router