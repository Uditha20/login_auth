import express, { json } from 'express'
import userRouter from './router/userRouter.js'
import mongoose from 'mongoose';
// const dotenv=require('dotenv').config()
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors'
const app=express()

const port =process.env.PORT ||3000;



app.use(json());
app.use(cors())

app.use('/auth/user',userRouter)

mongoose.connect(process.env.CONNECT_STR)
.then(()=>{
    console.log('succes')
})
.catch((err)=>{
    console.log(err)
})

app.listen(port,()=>{
    console.log(`server is running ${port}`)
})

