import mongoose from "mongoose";
import dotenv from "dotenv";
const connectDB = async (url) => {
  try {
    const conn = await mongoose.connect(url, {});
    console.log(`MongoDB is successfully Connected to Server`);
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
