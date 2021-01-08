const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const bcrypt = require("bcrypt");
const studentRouter = require('./routes/studentRouter')
const notificationRouter = require('./routes/notificationRouter')


const app = express();

let dbConnectCounter = 0;

function dbConnect(){
  // db connect
  mongoose.connect("mongodb+srv://root:Vasu@213@cluster0.h6x2l.mongodb.net/yuktaha-notifications?retryWrites=true&w=majority"
    ,{
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
  },(err)=>{
    if(!err)
      console.log("connection established");
    else if(dbConnectCounter<process.env.DB_RETRIES_MAX){
      dbConnectCounter++;
      console.log(`retry ${dbConnectCounter}`);
      dbConnect();
    }
    else{
      throw new Error("db connection failed");
    }
  });
};

dbConnect();

// Middleware
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
// set response header and cors
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
  if(req.method=="OPTIONS"){
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE,PATCH");
    return res.status(200).json({});
  }
});

app.use('/student',studentRouter);
app.use('/notify',notificationRouter);

// 404 route
app.use((req,res,next)=>{
    const error = new Error("Not a valid request");
    error.status = 404;
    next(error);
  });
  
  // Error handler
  app.use((err,req,res,next)=>{
    console.log("got you");
    console.log(err);
    res.status(err.status || 500).json({"Error":err.message});
  })
  
  // export
  module.exports = app;