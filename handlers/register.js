const { json } = require('body-parser');
const student = require('../models/student.js');
function register(req,res,next){
    student.findOneAndUpdate({emailId:req.params.emailId},(err,result)=>{
        if(!err){
            result.events.array.forEach(element => {
                if(element.eventName==req.params.eventName){
                    return res.status(201).json({
                        'msg':'already registered'
                    })
                }
            });
            let newEvent = new json({
                'eventName':req.params.eventName
            })
            result.events.push(newEvent)
            return res.status(201).json({
                'msg':'added'
            })
        }
    })
}

module.exports = register;