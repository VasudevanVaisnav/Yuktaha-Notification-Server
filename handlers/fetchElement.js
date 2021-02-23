const dbSchema = require('../models/db')
function download(req,res,next){
    dbSchema.findOne({},(err,res1)=>{//use filter as objec id
        if(!err){
            console.log(res1);
            return res.status(200).json("db",res1);
        }
        else{
            console.log("err");
            return res.status(500).json("error",err);
        }
    });
}
module.exports = addElement