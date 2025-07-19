import express from 'express'

const userRouter=express.Router()

userRouter.get('/',(req,res)=>{})

userRouter.get('/:id',(req,res)=>{})

userRouter.post('/',(req,res)=>{})

userRouter.put('/:id',(req,res)=>{})

userRouter.delete('/:id',(req,res)=>{})

export default userRouter