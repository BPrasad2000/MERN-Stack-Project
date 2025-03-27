import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";


//rest object
const app = express();


//configure env
dotenv.config();

//database config
connectDB();

 

//middlewares
app.use(express.json());
app.use(morgan("dev"));


 //port
 const PORT=process.env.PORT || 8080;

 //run listen

 app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
 });



