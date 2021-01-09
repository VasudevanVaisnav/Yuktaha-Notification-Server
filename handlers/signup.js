const student = require('../models/student.js');
const bcrypt = require('bcrypt');
const mongoose = require("mongoose")
let cnt = 0

function signup(req,res,next){
    console.log("signup");
    let YukID = 'yuk'
    let part = 202100
    student.find({}).exec().then((result)=>{
        // cnt=result.length;
        console.log(cnt);
    })
    part=part+cnt+1;
    cnt++;
    YukID=YukID+part;
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
                        .catch(err=>res.send(err))
                    }
                })
        }
    })
}

module.exports = signup;