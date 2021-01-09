const student = require('../models/student.js');
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose")


function signup(req,res,next){
    console.log("signup");
    let YukID = 'yuk'
    let cnt = 0
    let part = 202100
    student.find({}).exec().then((result)=>{
        cnt=result.length;
        part=part+cnt+1;
        YukID=YukID+part;
        console.log(cnt);
    })
    student.find({emailId:req.body.emailId})
    .exec().then((result)=>{
        if (result.length==0){
            bcrypt.hash(req.body.password,10,
                (err,hash)=>{
                    if(!err){
                        const newStudent = new student({
                            _id:new mongoose.Types.ObjectId(),
                            emailId:req.body.emailId,
                            password:hash,
                            notifToken:'null',
                            events:[],
                            yukId:YukID
                        })
                        newStudent.save()
                        .then(result=>{
                            return res.status(200).json({
                                'msg':'registered',
                                'yukId':YukID
                            })
                        })
                        .catch(err=>console.log(err))
                    }
                })
        }
    })
}

module.exports = signup;