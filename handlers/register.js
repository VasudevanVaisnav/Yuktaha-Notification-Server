const { json } = require('body-parser');
const student = require('../models/student.js');
function register(req,res,next){
    student.findOne({emailId:req.params.emailId},(err,doc)=>{
        if(!err)
        {
            doc.events.forEach(e => {
                if(e.eventName===req.params.eventName)
                {
                    return res.status(500).json({"msg":"already registered"})
                }
            });
            student.findOneAndUpdate({emailId:req.params.emailId},{$push:{events:{eventName:req.params.eventName}}},(err,result)=>{
                if(!err){
                    return res.status(200).json({"msg":"added"})
                }
            })
        }
    })
}

module.exports = register;