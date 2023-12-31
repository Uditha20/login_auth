import express, { json } from 'express'
import userRouter from './router/userRouter.js'
import mongoose from 'mongoose';
import cookieParser  from 'cookie-parser';

// const dotenv=require('dotenv').config()
import dotenv from 'dotenv';
dotenv.config();

const app=express()

const port =process.env.PORT ||3000;

app.use(json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))

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

