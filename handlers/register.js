const { json } = require('body-parser');
const student = require('../models/student.js');
function register(req,res,next){
    student.findOne({emailId:req.params.emailId},(err,doc)=>{
        if(!err)
        {
            let flag = false
            doc.events.forEach(e => {
                if(e.eventName===req.params.eventName)
                {
                    flag = true;
                }
            });
            if(flag){
                return res.status(200).json({"msg":"already added"})
            }
            else{
                student.findOneAndUpdate({emailId:req.params.emailId},{$push:{events:{eventName:req.params.eventName}}},(errr,result)=>{
                    if(!errr){
                        return res.status(200).json({"msg":"added"})
                    }
                    else{
                        console.log(errr);
                    }
                })
            }
        }
        else{
            console.log(err);
        }
    })
}

module.exports = register;