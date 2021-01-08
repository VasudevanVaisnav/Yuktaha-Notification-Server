const mongoose = require("mongoose")
const notificationSchema = mongoose.Schema({
    timeStamp : {type:Date,default:Date.now,required:true},
    message : {type:String,required:true},
    title : {type:String,required:true},
    event : {type:String,required:true}
})
module.exports = mongoose.model('notification',notificationSchema);