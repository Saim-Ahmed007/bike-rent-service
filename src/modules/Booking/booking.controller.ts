import httpStatus from "http-status";
import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { RentalServices } from "./booking.service";

const createRental = catchAsync(async(req,res)=>{
    const result = await RentalServices.createRentalIntoDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rental created successfully',
        data: result,
      });
})

const getAllRentals = catchAsync(async(req,res)=>{
    const result = await RentalServices.getAllRentalsFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rentals retrieved successfully',
        data: result,
      });
})

const returnBike =  catchAsync(async(req,res)=>{
    const {id} = req.params
    const result = await RentalServices.returnBike(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Bike Returned successfully',
        data: result,
      });
})

export const BookingController = {
    createRental,
    getAllRentals,
    returnBike
}