import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import { User } from "../models/user.models.js";
import jwt from "jsonwebtoken"

//register user
// 1.user will enter the data
// 2.we will take the data and register the user and save the info in the database


const registerUser=asyncHandler(async(req,res)=>{
    console.log("Req Body:-----",req.body)
    console.log("Headers:", req.headers["content-type"]);
    const {name, email, password }=req.body
    

    if(
        [name, email, password].some((field)=> field?.trim() ==="")
    ){
                throw new ApiError(400,"All fields are required")
    }

    const existedUser=await User.findOne({email});
    if(existedUser){
        throw new ApiError(409,"Email Already Exists ")
    }

    const newUser=await User.create({
        name ,
        email,
        password,
    })

    const response= await User.findById(newUser.id).select(
        "-password"
    )

    if(!response){
        throw new ApiError(500,"Something Went Wrong")
    }

    return res.status(200).json(
        new ApiResponse(200,response,"User Created Successfully")
    )
    
})



export {registerUser}
