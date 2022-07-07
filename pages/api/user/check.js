import mongoose from "mongoose";
// function to connect to mongodb
import conn from "../../../utils/connectMongo";
// user model
import User from "../../../models/User";
import { setCookie } from 'cookies-next';

export default async function handler(req, res) {
  try {
    conn();
    const {
      usernameOrEmail,
      password
    } = req.body;

    const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const inputType = (reg.test(usernameOrEmail)) ? "email": "username";
    const data = await User.findOne({
      [inputType]: usernameOrEmail,
      password: password
    });
    
    if(data){
      const acc = data[0];
      setCookie("registered", "true", {req, res, maxAge: 120});
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