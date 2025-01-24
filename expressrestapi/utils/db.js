import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI

const connectDB = async () => {
  try 
  {
    await mongoose.connect(MONGODB_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      // useFindAndModify: false,
    })
    console.log("MongoDB connected successfully")
  } 
  catch (error) 
  {
    console.error("MongoDB connection failed", error)
    process.exit(1)
  }
}

export default connectDB