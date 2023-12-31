import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        require:[true,'please enter your name']
    },
    email:{
        type:String,
        require:[true,'please enter the valid email']
    },
    password:{
        type:String,
        require:[true,'please enter the password'],
        minlength:5,
        // select:false
    }
})



const User=mongoose.model('User',userSchema);

export default User;