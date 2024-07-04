import { TBike } from "./bike.interface";
import { Bike } from "./bike.model";

const createBikeIntoDB = async(payload:TBike)=>{
    const result = await Bike.create(payload)
    return result
}

const getAllBikesFromDB = async()=>{
    const result = await Bike.find()
    return result
}

const updateBikeFromDB = async(id:string, payload:Partial<TBike>)=>{
    const result = await Bike.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true
    })
    return result
}

const deleteBikeFromDB = async(id:string)=>{
    const result = await Bike.findByIdAndDelete(id,{
        new: true,
        runValidators: true
    })
    return result
}

export const BikeServices = {
    createBikeIntoDB,
    getAllBikesFromDB,
    updateBikeFromDB,
    deleteBikeFromDB
}