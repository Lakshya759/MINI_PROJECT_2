import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import jwt from "jsonwebtoken"
import {User} from "../models/user.models.js"

export const verifyJWT=asyncHandler((req,res,next)=>{
    try {
        const token=req.cookie?.accessToken
        if(!token){
            throw new ApiError(401,"Unauthorised Access")
        }
        const decodedToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
        const user=await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if(!user){
            throw new ApiError(401,"Invalid Access Token")
        }
        req.user=user
        next()
    } catch (error) {
        throw new ApiError(400,error?.message || "Something went wrong while verifying jwt")
    }

})