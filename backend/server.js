import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";



// app config
const app = express()
const port = process.env.PORT || 4000;

// middleware
app.use(express.json()) // using this request will be parsed whenever frontend request to backend.
app.use(cors()) // using this acess backend from any frontend

// db config
connectDB();

// api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);


app.get("/",(req,res)=>{
    res.send("API Working")
}) // request dara from server

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://greatstack:123451@cluster0.kc89x.mongodb.net/?