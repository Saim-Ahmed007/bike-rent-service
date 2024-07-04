import mongoose, { model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new mongoose.Schema<TUser>({
    name : {type: String, required: true},
    email : {type : String, required: true, unique: true},
    password : {type: String, required: true},
    phone : {type : String, required: true},
    address : {type : String, required: true},
    role : {type: String}  
},{
    timestamps: true
})

export const User = model<TUser>('User', userSchema)