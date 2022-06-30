import mongoose from "mongoose";

const schema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  profile: String,
  totalThreads: Number,
  threads: [{
    title: String,
    time: String
  }]
});

const User = mongoose.models.User || mongoose.model("User", schema);

export default User;