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
      profile: "https://picsum.photos/id/237/200/200"
    });
    res.redirect("/login?registered=true");
  }catch(err){
    console.log(err.message);
    res.json({
      status: "error"
    });
  }
}