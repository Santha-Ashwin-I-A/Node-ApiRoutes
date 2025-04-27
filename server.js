const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const authRouter = require("./routers/authRouter");

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.send("its working");
});

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected")
}).catch((err)=>{
    console.log(err);
})


app.use("/api/auth",authRouter);


app.listen(PORT,(req,res)=>{
    console.log(`Port Started on http://localhost:${PORT}`);
})