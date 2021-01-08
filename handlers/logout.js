const student = require('../models/student.js');
function register(req,res,next){
    student.findOneAndUpdate({emailId:req.params.emailId},(err,result)=>{
        if(!err){
            result.notifToken='null'
            return res.status(203).json({
                'msg':'loggedOut'
            })
        }
    })
}

module.exports = register;