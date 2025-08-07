import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); 

const mongoURL = process.env.MONGO_URI
  // console.log(mongoURL)
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ DB Error:", err.message);
    process.exit(1);
  }
};

export default connectDB;

