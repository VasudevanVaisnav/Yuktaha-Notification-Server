const student = require('../models/student.js');
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose")
function login(req,res,next)
{
  student.findOne({emailId:req.body.emailId}).exec().then(result=>{
      console.log("login");
      console.log(result);
    if (result!=null){
        bcrypt.compare(req.body.password,result.password,(err,verdict)=>{
            if (!err && verdict==true){
                student.findByIdAndUpdate(result.id,{notifToken:req.body.token},(errr,doc)=>{
                    if(!errr){
                        res.status(200).json({"msg":"success",
                        'yukId':result.yukId})
                    }
                })
            }
            else if(!err){
                res.status(201).json({"msg":"invalid password"})
            }
            else{
                res.status(202).json({"msg":"incorrect password"})
            }
        })
    }
    else{
        return res.status(203).json({"msg":"no such client found"})
    }        
})
}

module.exports = login;