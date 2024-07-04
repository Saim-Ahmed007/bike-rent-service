import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";
import { Bike } from "../Bike/bike.model";

const createRentalIntoDB = async(payload:TBooking)=>{
    const result = await Booking.create(payload)
    return result
}

const getAllRentalsFromDB = async()=>{
    const result = await Booking.find()
    return result
}

const returnBike = async(id:string)=>{
   const bookingInfo = await Booking.findOne({bikeId:id});
   
   const startTime: Date = new Date(bookingInfo?.startTime as Date);
   const returnTime: Date = new Date(bookingInfo?.returnTime as Date);
   
   const differenceInMilliseconds: number = returnTime.getTime() - startTime.getTime();
   
   const differenceInHours: number = differenceInMilliseconds / (1000 * 60 * 60);
  
   const bikeInfo = await Bike.findById(id)
   const bikePricePerHour = bikeInfo?.pricePerHour as number
   const totalCost = (differenceInHours * bikePricePerHour)
    
    const isReturned = true
    
    const result = await Booking.findByIdAndUpdate(bookingInfo?._id, {totalCost, isReturned},{
        new: true
    })

   return result

}

export const RentalServices = {
    createRentalIntoDB,
    getAllRentalsFromDB,
    returnBike
}