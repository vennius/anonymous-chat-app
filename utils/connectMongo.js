import mongoose from "mongoose";

const conn = async () => await mongoose.connect(process.env.MONGO_URI);

export default conn;