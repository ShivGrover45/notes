import express from 'express'
import connectToDb from './database/mongodb.js'
import router from './routes/note.routes.js'
import { PORT } from './config/env.js'



const app=express()
//const PORT=2000

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Welcome Buddy")
})

app.use('/notes',router)

app.listen(PORT, async()=>{
    console.log(`Server listening on PORT:${PORT}`)
    await connectToDb()
})