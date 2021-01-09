const gcm = require("node-gcm")
const notification = require('../models/notification.js');
const student = require("../models/student.js");
const sender = new gcm.Sender('AAAA80CI5cw:APA91bEf9BPKt1OGLKdR6AHQNI2aYiVp6wf-8cRHEcDX9vmI3QBpoBohsA-JsClLeCwhPN2ZeO9RUWtsJJXLiYxevATWvdTJ_QKQ3Z3vPLf_Id6elwBCpuAhg71vPNyuRKjRAeeAZHDz');

function notify(req,res,err){
    var registrationTokens = [];
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
    student.find({}).exec().then(result=>{
        //console.log(result[0]);
        for (let index = 0; index < result.length; index++) {
            const r = result[index]
            //console.log(r);
            let el = false
            const rr = r.events
            for (let indexy = 0; indexy < rr.length; indexy++) {
                const element = rr[indexy];
                if(element.eventName==req.body.eventname){
                    el=true
                }
            }
            if(el){
                //console.log(r.notifToken);
                if(r.notifToken!='null'){
                    registrationTokens.push(r.notifToken);
                }
            }
        }
        console.log(registrationTokens);
        //send
    })
    return res.status(200).json({"msg":"hmm"})
}

module.exports = notify;