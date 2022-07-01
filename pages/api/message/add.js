import mongoose from "mongoose";
// a function to connect to mongodb
import conn from "../../../utils/connectMongo";
// a function to format a date
import formatDate from "../../../utils/formatDate";
// a function to push message to thread
import pushMessage from "../../../utils/pushMessage";
// user model
import Thread from "../../../models/Thread";

export default async function handler(req, res){
  conn();
  try{
    await pushMessage(req.body.id, req.body.message);
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