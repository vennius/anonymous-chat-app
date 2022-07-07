import mongoose from "mongoose";
// function to connect to mongodb
import conn from "../../../utils/connectMongo";
// user model
import User from "../../../models/User";
import { setCookie } from 'cookies-next';
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  try {
    conn();
    const {
      usernameOrEmail,
      password
    } = req.body;
    //console.log(usernameOrEmail);
    //console.log(password);
    const privateKey = process.env.PRIVATE_KEY;
    console.log(privateKey);

    const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const inputType = (reg.test(usernameOrEmail)) ? "email": "username";
    console.log(inputType);
    const data = await User.findOne({
      [inputType]: usernameOrEmail,
      password: password
    });
    console.log(data);
    if(data){
      const token = jwt.sign({
        id: data._id,
        username: data.username,
        email: data.email,
        password: data.password
      }, privateKey);
      setCookie("token", token, {req, res, maxAge: 3600});
      return res.redirect("/");
    }
    throw {
      message: "user not found"
    }
  }catch(err) {

    console.log(err.message);
    res.json({
      status: "error",
      data: null
    });

  }
}