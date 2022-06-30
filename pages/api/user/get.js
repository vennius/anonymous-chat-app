import mongoose from "mongoose";
// function to connect to mongodb
import conn from "../../../utils/connectMongo";
// user model
import User from "../../../models/User";

export default async function handler(req, res){
  conn();
  /*const user = new User({
    username: "vennius",
    email: "abcdefghijklmnop@gmail.com",
    password: "123456789",
    profile: "vennius.jpg",
    totalThreads: 10 ,
    threads: [{
      title: "gak tauuu",
      time: "1 July"
    }]
  });*/
  return res.json({
    data: await User.find()
  });
}