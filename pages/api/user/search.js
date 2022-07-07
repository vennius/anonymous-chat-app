import mongoose from "mongoose";
// function to connect to mongodb
import conn from "../../../utils/connectMongo";
// user model
import User from "../../../models/User";

export default async function handler(req, res){
  conn();
  return res.json({
    data: await User.find(req.body)
  });
}