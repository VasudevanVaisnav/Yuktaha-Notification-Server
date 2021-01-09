const mongoose = require("mongoose")
const studentSchema = mongoose.Schema({
    emailId : {type:String,required:true,unique:true},
    password : {type:String,required:true},
    yukId : {type:String,required:true},
    notifToken : {type:String,required:true,default:"null"},
    events : [{
        eventName : {type:String,required:true}
    }]
})
module.exports = mongoose.model('student',studentSchema);