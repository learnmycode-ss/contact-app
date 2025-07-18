// const mong = require("mongoose");
import mong from "mongoose";

const connectDb = ()=>{
mong.connect('mongodb://127.0.0.1:27017/contact-curd') 
.then(() => console.log("MongoDB Connected..."));

}
export default connectDb;
