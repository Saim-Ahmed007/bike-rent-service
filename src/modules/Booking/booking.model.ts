import mongoose, { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';

const createBookingSchema = new mongoose.Schema<TBooking>({
  userId: {
    type: Schema.Types.ObjectId,
    required: [true, 'userId is required'],
    ref: 'User',
  },

  bikeId : {
    type : Schema.Types.ObjectId,
    unique : true,
    required : [true, 'bikeId is required'],
    ref : 'Bike'
  },

  startTime: {type:Date},
  returnTime :{type: Date},
  totalCost : {type: Number},
  isReturned : {type: Boolean, default:false}
});

export const Booking = model<TBooking>('Booking', createBookingSchema)
