import user from "../model/userModel.js";

const test = (req, res) => {
  res.json("ok find");
};

const registerUser = async (req, res) => {
  try {
    const userCreate = await user.create(req.body);
    res.status(201).json({ 
        status: "success",
        data:{
            userCreate
        }
     });
  } catch (err) {
    res.status(404).json({
        status:'fail',
        message:err.message
    })
  }
};

export { test, registerUser };
