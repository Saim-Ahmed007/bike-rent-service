import httpStatus from "http-status";
import AppError from "../../app/errors/AppError";
import { User } from "../User/user.model";
import { TLoginUser } from "./auth.interface";
import jwt from 'jsonwebtoken'
import config from "../../app/config";

const userLogin = async(payload : TLoginUser)=>{
    
    //check if user email exists
    const user = await User.findOne({email: payload.email})
    // const isUserExists = await User.findOne({email: payload.email})
    if(!user){
        throw new AppError(httpStatus.NOT_FOUND, 'This user email is not exist','')
    }
    //check if password Exists
    const isPasswordExist = await User.findOne({password: payload.password})
    if(!isPasswordExist){
        throw new AppError(httpStatus.NOT_FOUND, 'password does not exist','')
    }

    //create token and sent to the client
    const jwtPayload = {
        userId : user.id,
        role : user.role
    }
    const token = jwt.sign(jwtPayload, config.jwt_access_secret as string, {expiresIn:'10d'})

    return {token, user}

}

export const AuthServices = {
    userLogin
}