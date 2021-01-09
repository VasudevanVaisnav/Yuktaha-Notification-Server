const student = require('../models/student.js');
function register(req,res,next){
    console.log("logout");
    // student.findOneAndUpdate({emailId:req.params.emailId},(err,result)=>{
    //     if(!err){
    //         result.notifToken='null'
    //     }
    // })
    student.findOne({emailId:req.params.emailId},(err,result)=>{
        if(result!=null)
        {
            student.findByIdAndUpdate(result.id,{notifToken:"null"},(e,doc)=>{
                if(!e)
                {
                    return res.status(203).json({
                        'msg':'loggedOut'
                    })
                }
            })
        }else{
            // *
            return res.status(500).json('msg','error');
        }
    })
}

module.exports = register;