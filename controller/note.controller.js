
import noteModel from "../model/note.model.js";

export const newNotes= async(req,res,next)=>{
    const{title,description}=req.body
    console.log(title)
    console.log(description)
    try{
        const newNote=await noteModel.create({
        title:title,
        Description:description
    })
    res.json(newNote)
    }catch(err){
        console.log(err.message)
    }
}

export const getNotes=async(req,res,next)=>{

    try{
        const getNote=await noteModel.find()
        res.json(getNote)
    }catch(err){
        console.log(err.message)
    }
    
}

export const getNoteById=async(req,res,async)=>{
    const {id}=req.params
    try{
        const getNote=await noteModel.findById(id)
        res.json(getNote)
    }catch(err){
        console.log(err.message)
    }
}

export const updateNotes=async(req,res,next)=>{

    try{

        const {id}=req.params
        
        const note=await noteModel.findById(id)

        if(!note){
            res.sendStatus(404).json("Note  not found")
        }

        if(req.body.title){
            note.title=req.body.title
        }

        if(req.body.Description){
            note.Description=req.body.Description
        }

        const updated=await note.save()
        res.json(updated)
    }catch(err){
        console.log(err.message)
    }

}

export const deleteNotes=async(req,res,next)=>{

    try{
    const {id}=req.params
        
        const note=await noteModel.findById(id)

        if(!note){
            res.sendStatus(404).json("Note  not found")
        }
        await note.deleteOne()
        res.json({
                message:"Deleted Successfully"
            })
        }catch(err){
            console.log(err.message)
        }

}