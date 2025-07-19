import bcrypt from 'bcrypt'
import userModel from '../model/user.model.js'
import jwt from 'jsonwebtoken'
import {JWT_SECRET_KEY,JWT_EXPIRES_IN} from '../config/env.js'

export const signUp=async (req,res,next)=>{ 
   
   try{ 
      const {name,email,password}=req.body
     const existingUser=await userModel.findOne({email})
     if(existingUser){
      const error=new Error("user already exist")
      error.statusCode=409
      throw error
      
     }
    const salt=await bcrypt.genSalt(8)
    const hashedPassword=await bcrypt.hash(password,salt)
    const newUser=await userModel.create({name,email,password:hashedPassword})
    const token=jwt.sign({user_id:newUser._id},JWT_SECRET_KEY,{expiresIn:JWT_EXPIRES_IN})
     res.status(201).json({
      success:true,
      message:"user created",
      data:{
         token,
         newUser
      }
    }
    )
   }catch(error){
     next(error)
   }
}

export const signIn=async(req,res,next)=>{
   try{
      const {email,password}=req.body
      const user=await userModel.findOne({email})
      if(!user){
         const error=new Error("User not found" )
         error.statusCode=404
         throw error
      }
      const validPassword=bcrypt.compare(user.password,password)
      if(!validPassword){
         const error=new Error("Invalid Password")
         error.statusCode=403
         throw error
      }else{
         res.status(200).json({
            success:true,
            message:"Verification Successfull",
            data:user
         })
      }
   }catch(error){
      console.log(error.message)
      next(error)
   }
}

export const signOut=(req,res,next)=>{}