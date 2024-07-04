import httpStatus from "http-status";
import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { AuthServices } from "./auth.service";

const userLogin = catchAsync(async(req,res)=>{
    const result = await AuthServices.userLogin(req.body)
    sendResponse(res, {
        statusCode : httpStatus.OK,
        success : true,
        message : 'User logged in successfully',
        data : result,
      })
})

export const AuthController = {
    userLogin
}