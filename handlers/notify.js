const gcm = require("node-gcm")
const notification = require('../models/notification.js');
const student = require("../models/student.js");
const sender = new gcm.Sender('AAAA80CI5cw:APA91bEf9BPKt1OGLKdR6AHQNI2aYiVp6wf-8cRHEcDX9vmI3QBpoBohsA-JsClLeCwhPN2ZeO9RUWtsJJXLiYxevATWvdTJ_QKQ3Z3vPLf_Id6elwBCpuAhg71vPNyuRKjRAeeAZHDz');
var registrationTokens = [];

function notify(req,res,err){
    const message = new gcm.Message({
        priority:'high',
        contentAvailable:true,
        delayWhileIdle:true,
        timeToLive:86400,
        notification:{
            title:req.body.title,
            body:req.body.message
        }
    });
    student.find().exec().then(result=>{
        var el = false
        console.log(result);
        result.foreach(r=>{
            r.events.foreach(element => {
                if(element.eventName==req.body.eventname){
                    el=true
                }
            });
            if(el){
                registrationTokens.push(r.notifToken);
            }
        })
    })
    // console.log(registrationTokens);
    return res.status(200).json({"msg":"hmm"})
}

module.exports = notify;