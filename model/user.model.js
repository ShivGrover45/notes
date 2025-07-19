
import mongoose from 'mongoose'

const schema=mongoose.Schema

const userSchema=new schema({
    name:{
        type:String,
        require:[true,"User name is required"],
        trim:true,
        minLength:2,
        maxLength:255
    },
    email:{
        type:String,
        require:[true,"user email is required"],
        trim:true,
        minLength:5,
        maxLength:100,
        lowerCase:true,
        match:[/\S+@\S+\.\S+/,"Enter Valid email address"]
    },
    password:{
        type:String,
        require:[true,"password is required"],
        trim:true,
        minLength:8,
    }
},{timeStamps:true}
)

const userModel=mongoose.model('users',userSchema)

export default userModel