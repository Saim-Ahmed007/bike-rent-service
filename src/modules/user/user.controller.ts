import httpStatus from "http-status";
import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { UserServices } from "./user.service";

const createUser = catchAsync(async(req,res)=>{

    const result = await UserServices.createUserIntoDB(req.body)
    sendResponse(res, {
        statusCode : httpStatus.OK,
        success : true,
        message : 'User registered successfully',
        data : result,
      })
})

const getSingleUser = catchAsync(async(req,res)=>{
    const {id} = req.params
    const result = await UserServices.getSingleUserFromDB(id)
    sendResponse(res, {
        statusCode : httpStatus.OK,
        success : true,
        message : 'User profile retrieved successfully',
        data : result,
      })
})

const updateUser = catchAsync(async(req,res)=>{
    const {id} = req.params
    const result = await UserServices.updateUserFromDB(id, req.body)
    sendResponse(res, {
        statusCode : httpStatus.OK,
        success : true,
        message : 'Profile updated successfully',
        data : result,
      })
})

export const UserController = {
    createUser,
    getSingleUser,
    updateUser
}

