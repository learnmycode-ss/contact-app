// const mong = require("mongoose");
import mong from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDb = ()=>{
mong.connect(process.env.MONGO_URL) 
.then(() => console.log("MongoDB Connected..."));

}
export default connectDb;
