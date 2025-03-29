import {comparePassword, hashPassword } from "../helpers/authhelper.js";
import UserModel from "../Models/UserModel.js";
import JWT from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    //validation
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
  
    //check user
    const exsitingUser = await UserModel.findOne({ email });

    if (exsitingUser) {
      return res.status(200).json({
        success: false,
        message: "Already Register please ",
      });
    }

    //register user
    const hashedPassword = await hashPassword(password);
    //save

    const user = await new UserModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(200).json({
      success: true,
      message: "User Register Sucsessfully",
      user,
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: `Error in Registraion`,
      error,
    });
  }
};

export const login = async (req,res) => {
  try {

    const {email,password} =req.body

    if (!email || !password) {
      return res.status(400).send({ 
        message: "Invalid email or password"
       });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).send({
         message: "Email is not registerd" 
        });
    }

    const match = await comparePassword(password,user.password)
    if (!match) {
      return res.status(200).send({
         message: "Invalid Password" 
        });
    }

    //token
    const token = await JWT.sign({_id: user._id},process.env.JWT_SECRET,{
      expiresIn:"7d",
    }) 
    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });

    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:'Error in login',
      error
    })
  }
};

//test protected route
export const test = (req,res) => {
  res.send('protected Route');
}