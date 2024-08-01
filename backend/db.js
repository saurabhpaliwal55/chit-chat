import mongoose from "mongoose";
import dotenv from "dotenv"
import { DB_NAME } from "./constants.js";

dotenv.config();

const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB HOSt: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Something wrong happende while connecting BD ",error);
    }
}

export {connectDB};