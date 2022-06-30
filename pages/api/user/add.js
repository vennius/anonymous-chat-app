import mongoose from "mongoose";
// function to connect to mongodb
import conn from "../../../utils/connectMongo";
// user model
import User from "../../../models/User";

export default async function handler(req, res){
  conn();
  try{
    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      profile: req.body.profile,
      totalThreads: req.body.totalThreads
    });
    res.json({
      status: "ok"
    });
  }catch(err){
    console.log(err.message);
    res.json({
      status: "error"
    });
  }
}