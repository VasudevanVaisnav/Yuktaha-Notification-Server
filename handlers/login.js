const student = require('../models/student.js');
const bcrypt = require('bcrypt');
const mongoose = require("mongoose")
function login(req,res,next)
{
  student.findOneAndUpdate({emailId:req.body.emailId}).exec().then(result=>{
      console.log("login");
    console.log(result);
    if (result.length==1){
        bcrypt.compare(req.body.password,result[0].password,(err,verdict)=>{
            if (!err && verdict==true){
                result.notifToken = req.body.token
                res.status(200).json({"msg":"success",
            'yukId':result.body.yukId})
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