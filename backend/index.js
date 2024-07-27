import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello from server")
})

connectDB();

app.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`)
})
