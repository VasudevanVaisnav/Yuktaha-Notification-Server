const student = require('../models/student.js');
const bcrypt = require('bcrypt');
const mongoose = require("mongoose")

function signup(req,res,next){
    let YukID = 'yuk'
    let part = 202100
    let cnt = 0
    student.find({}).exec().then((result)=>{
        cnt=result.length;
    })
    part=part+cnt+1;
    YukID=YukID+part
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
                        .catch(err=>res.send(err))
                        .then(result=>{
                            return res.status(200).json({
                                'msg':'registered',
                                'yukId':YukID
                            })
                        })
                    }
                })
        }
    })
}

module.exports = signup;