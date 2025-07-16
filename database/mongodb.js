import mongoose from "mongoose";
import { NODE_ENV,DB_URI } from "../config/env.js";

if(!DB_URI){
    throw new error('Define Database environment variable inside .env.<devlepment/production>.local')
}

const connectToDb= async()=>{
    try{
        await mongoose.connect(DB_URI)
        console.log(`Successfully connected in ${NODE_ENV} mode`)
    }catch(err){
        console.log(err.message)
        process.exit(1)
    }
}
export default connectToDb