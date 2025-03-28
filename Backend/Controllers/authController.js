import {hashPassword } from "../helpers/authhelper.js";
import UserModel from "../Models/UserModel.js";

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