import user from "../model/userModel.js";
// import { comparePassword } from "../helper/auth.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const test = (req, res) => {
  res.json("ok find");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check validation
    if (!name) {
      return res.json({
        err: "name is required",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        err: "password is required and should be least 6 character",
      });
    }
    const exits = await user.findOne({ email });
    if (exits) {
      return res.json({
        err: "user already exits",
      });
    }
    bcrypt.genSalt(10, function(err, salt) {
      if(err){
        return res.json({
          err:err.message
        })
      }
      bcrypt.hash(password, salt, async function(err, hash) {
        if(err){
          return res.json({
            err:err.message
          })
        }
          // Store hash in your password DB.
          const userCreate = await user.create({name,email,password:hash});
          return res.json(userCreate);
      });
  });
    //create the user
  } catch (err) {
    console.log(err.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const userFind = await user.findOne({ email });
    if (!userFind) {
      return res.json({
        err: "no user found",
      });
    }
  
    bcrypt.compare(password, userFind.password, function(err, result) {
      if (err) {
        return res.status(500).json({
          err: "Internal Server Error"
        });
      }
      
      if (result) {
        jwt.sign({email:userFind.email,id:userFind._id,name:userFind.name},process.env.JWT_SECRET,{},(err,token)=>{
          if(err)throw err;
          res.cookie('token',token).json(userFind)
        })
      } else {
        return res.status(401).json({ msg: "Invalid credentials" });
      }
    });
    
 
  } catch (err) {
    console.log(err);
  }
};

const profile =(req,res)=>{
 const {token}=req.cookies
 if(token){
  jwt.verify(token,process.env.JWT_SECRET,{},(err,user)=>{
    if(err)throw err;
    res.json(user)
  })
 }else{
  res.json(null)
 }
}
export { test, registerUser, loginUser,profile };
