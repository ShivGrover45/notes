import express from 'express'
import connectToDb from './database/mongodb.js'
import router from './routes/note.routes.js'
import { PORT } from './config/env.js'
import errorMiddleWare from './middleware/error.middleware.js'
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'


const app=express()
//const PORT=2000

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send("Welcome Buddy")
})

app.use('api/v1/user',userRouter)
app.use('api/v1/notes',router)
app.use('api/v1/auth',authRouter)
app.use(errorMiddleWare)

app.listen(PORT, async()=>{
    console.log(`Server listening on PORT:${PORT}`)
    await connectToDb()
})