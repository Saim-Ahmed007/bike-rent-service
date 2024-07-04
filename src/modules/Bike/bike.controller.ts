import httpStatus from "http-status";
import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { BikeServices } from "./bike.service";

const createBike = catchAsync(async(req,res)=>{
    const result = await BikeServices.createBikeIntoDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Bike is added succesfully',
        data: result,
      });
})

const getAllBikes = catchAsync(async(req,res)=>{
    const result = await BikeServices.getAllBikesFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Bikes are retrieved succesfully',
        data: result,
      });
})

const updateBike = catchAsync(async(req,res)=>{
    const {id} = req.params
    const result = await BikeServices.updateBikeFromDB(id, req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Bike is updated succesfully',
        data: result,
      });
})

const deleteBike = catchAsync(async(req,res)=>{
    const {id} = req.params
    const result = await BikeServices.deleteBikeFromDB(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Bike deleted succesfully',
        data: result,
      });
})

export const BikeController = {
    createBike,
    getAllBikes,
    updateBike,
    deleteBike

}