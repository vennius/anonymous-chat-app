import mongoose from "mongoose";
// a function to connect to mongodb
import conn from "../../../utils/connectMongo";
// a function to format a date
import formatDate from "../../../utils/formatDate";
// user model
import User from "../../../models/User";
import Thread from "../../../models/Thread";
import { format, addHours } from "date-fns";
import decodeCookie from "../../../utils/getUserFromCookie";

export default async function handler(req, res){
  
  // data needed: createdById, endsInHours, title
  
  if(!req.body.createdById && !req.body.endsInHours && !req.body.title) return res.json({
    status: "error"
  });
  
  const decodedCookie = decodeCookie(req.cookies.token);
  const createdById = decodedCookie.id;
  const {endsInHours, title} = req.body;
  
  conn();
  const createdDate = new Date();
  const endedDate = addHours(createdDate, parseInt(endsInHours));
  
  const createdAt = formatDate(createdDate, "/", ":");
  const endedAt = formatDate(endedDate, "/", ":");
  await Thread.create({
    createdById,
    title,
    createdAt,
    endedAt
  });
  res.redirect("/create");
  
}