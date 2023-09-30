const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();

dotenv.config();
connectDB();

app.get(
    "/",
    (req,res) =>{
        res.send("hello")
    }
)

app.listen(
    5000,
    () => console.log("App is running")
)