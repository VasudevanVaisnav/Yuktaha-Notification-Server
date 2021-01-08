const gcm = require("node-gcm")
const notification = require('../models/notification.js');
const student = require("../models/student.js");
const notification = require('../models/student.js');
const sender = new gcm.Sender('AAAA80CI5cw:APA91bEf9BPKt1OGLKdR6AHQNI2aYiVp6wf-8cRHEcDX9vmI3QBpoBohsA-JsClLeCwhPN2ZeO9RUWtsJJXLiYxevATWvdTJ_QKQ3Z3vPLf_Id6elwBCpuAhg71vPNyuRKjRAeeAZHDz')
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
    var registrationTokens = [];
    student.find({},(err,result)=>{
        var el = false
        result.events.forEach(element => {
            if(element.eventName==req.body.eventname){
                el=true
            }
        });
        if(el){
            registrationTokens.push(result.body.notifToken);
        }
    })
    sender.send(message,{registrationTokens:registrationTokens},10,(err,res)=>{
        if(err){
            return res.status(201).json('msg','not sent');
        }
        else{
            return res.status(201).json('msg','sent');
        }
    })
}