import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async(payload : TUser)=>{
    const result = await User.create( payload)
    return result
}


const getSingleUserFromDB = async(id:string)=>{
    const result = await User.findById(id)
    return result
}

const updateUserFromDB = async(id:string, payload:Partial<TUser>)=>{
    const result = await User.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true
    })
    return result
}

export const UserServices = {
    createUserIntoDB,
    getSingleUserFromDB,
    updateUserFromDB
}