import mongoose from "mongoose";

const schema = new mongoose.Schema({
  createdById: String,
  title: String,
  createdAt: String,
  endedAt: String,
  messages: [{
    time: String,
    message: String
  }]
});

const Thread = mongoose.models.Thread || mongoose.model("Thread", schema);

export default Thread;