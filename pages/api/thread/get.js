import mongoose from "mongoose";
// function to connect to mongodb
import conn from "../../../utils/connectMongo";
// user model
import Thread from "../../../models/Thread";

export default async function handler(req, res){
  conn();
  const thread = await Thread.find({ _id : req.body.id })
  return res.json({
    data: thread
  });
}