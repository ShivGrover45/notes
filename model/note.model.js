import mongoose from "mongoose";

const Schema=mongoose.Schema

const noteSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    }
})

const noteModel=mongoose.model('noteSchema',noteSchema)

export default noteModel