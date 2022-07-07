import mongoose from "mongoose";

const schema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  profile: String
  /*threads: [{
    title: String,
    createdAt: String,
    endedAt: String,
    messages: [{
      at: String,
      message: String
    }]
  }]*/
});

const User = mongoose.models.User || mongoose.model("User", schema);

export default User;