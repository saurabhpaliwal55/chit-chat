import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import userRouter from "./routes/userRoutes.js";
import chatRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/userRoutes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:false,limit:"16kb"}))
connectDB();

app.get("/",(req,res)=>{
    res.send("Hello from server")
})
app.get("/api",(req,res)=>{
    res.send("API hit")
})

app.use("/api/user",userRouter);
app.use("/api/chat",chatRouter)
app.use("/api/message",messageRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`)
})
