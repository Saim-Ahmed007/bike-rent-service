import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"


const validateRequest = (schema: AnyZodObject) => {
    return async (req:Request, res:Response, next:NextFunction)=>{
        
        try{
            //validate
        //if everything all right then next() ->
        await schema.parseAsync({
            body : req.body
        })
    
        return next()
    
        }catch(err){
            next(err)
        }
    }
    }

export default validateRequest