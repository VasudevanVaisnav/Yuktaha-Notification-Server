const db = require('../models/db')
function updatesCheck(req,res,next){
    db.findOne({},(result,err)=>{
        if (req.body.mainToken==result.yukToken){
            return res.status(200).json({"msg":"none"});
        }
        else{
            var tokenArr= {"cse":{
                "events":{
                    "eventsList":[]
                },
                "workshop":{
                    "workshopList":[]
                },
                "ppn":{
                    "ppnList":[]
                }
            },
            "ece":{
                "events":{
                    "eventsList":[]
                },
                "workshop":{
                    "workshopList":[]
                },
                "ppn":{
                    "ppnList":[]
                }
            },
            "eee":{
                "events":{
                    "eventsList":[]
                },
                "workshop":{
                    "workshopList":[]
                },
                "ppn":{
                    "ppnList":[]
                }
            },
            "mech":{
                "events":{
                    "eventsList":[]
                },
                "workshop":{
                    "workshopList":[]
                },
                "ppn":{
                    "ppnList":[]
                }
            },
            "civil":{
                "events":{
                    "eventsList":[]
                },
                "workshop":{
                    "workshopList":[]
                },
                "ppn":{
                    "ppnList":[]
                }
            },
            "non":{
                "funEvents":{
                    "eventsList":[]
                }
            }};
            tokenArr["mainToken"]=result.yukToken;
            tokenArr.cse["cseToken"]=result.cse.cseToken;
            tokenArr.cse.events["eventsToken"]=result.cse.events.eventsToken;
            tokenArr.cse.workshop["workshopToken"]=result.cse.workshops.workshopsToken;
            tokenArr.cse.ppn["ppnToken"]=result.cse.pps.ppsToken;
            tokenArr.ece["eceToken"]=result.ece.eceToken;
            tokenArr.ece.events["eventsToken"]=result.ece.events.eventsToken;
            tokenArr.ece.workshop["workshopToken"]=result.ece.workshops.workshopsToken;
            tokenArr.ece.ppn["ppnToken"]=result.ece.pps.ppsToken;
            tokenArr.eee["eeeToken"]=result.eee.eeeToken;
            tokenArr.eee.events["eventsToken"]=result.eee.events.eventsToken;
            tokenArr.eee.workshop["workshopToken"]=result.eee.workshops.workshopsToken;
            tokenArr.eee.ppn["ppnToken"]=result.eee.pps.ppsToken;
            tokenArr.mech["mechToken"]=result.mech.mechToken;
            tokenArr.mech.events["eventsToken"]=result.mech.events.eventsToken;
            tokenArr.mech.workshop["workshopToken"]=result.mech.workshops.workshopsToken;
            tokenArr.mech.ppn["ppnToken"]=result.mech.pps.ppsToken;
            tokenArr.civil["civilToken"]=result.civil.civilToken;
            tokenArr.civil.events["eventsToken"]=result.civil.events.eventsToken;
            tokenArr.civil.workshop["workshopToken"]=result.civil.workshops.workshopsToken;
            tokenArr.civil.ppn["ppnToken"]=result.civil.pps.ppsToken;
            tokenArr.non["nonToken"]=result.non.nonToken;
            tokenArr.non.funEvents["eventsToken"]=result.non.events.eventsToken;
            result.cse.events.eventsList.forEach(function(element) {
                var token = element.token;
                tokenArr.cse.events.eventsList.push(token);
            });
            result.cse.workshops.workshopsList.forEach(function(element) {
                var token = element.token;
                tokenArr.cse.workshop.workshopList.push(token);
            });
            result.cse.pps.ppsList.forEach(function(element) {
                var token = element.token;
                tokenArr.cse.ppn.ppnList.push(token);
            });
            result.ece.events.eventsList.forEach(function(element) {
                var token = element.token;
                tokenArr.ece.events.eventsList.push(token);
            });
            result.ece.workshops.workshopsList.forEach(function(element) {
                var token = element.token;
                tokenArr.ece.workshop.workshopList.push(token);
            });
            result.ece.pps.ppsList.forEach(function(element) {
                var token = element.token;
                tokenArr.ece.ppn.ppnList.push(token);
            });
            result.eee.events.eventsList.forEach(function(element) {
                var token = element.token;
                tokenArr.eee.events.eventsList.push(token);
            });
            result.eee.workshops.workshopsList.forEach(function(element) {
                var token = element.token;
                tokenArr.eee.workshop.workshopList.push(token);
            });
            result.eee.pps.ppsList.forEach(function(element) {
                var token = element.token;
                tokenArr.eee.ppn.ppnList.push(token);
            });
            result.mech.events.eventsList.forEach(function(element) {
                var token = element.token;
                tokenArr.mech.events.eventsList.push(token);
            });
            result.mech.workshops.workshopsList.forEach(function(element) {
                var token = element.token;
                tokenArr.mech.workshop.workshopList.push(token);
            });
            result.mech.pps.ppsList.forEach(function(element) {
                var token = element.token;
                tokenArr.mech.ppn.ppnList.push(token);
            });
            result.civil.events.eventsList.forEach(function(element) {
                var token = element.token;
                tokenArr.civil.events.eventsList.push(token);
            });
            result.civil.workshops.workshopsList.forEach(function(element) {
                var token = element.token;
                tokenArr.civil.workshop.workshopList.push(token);
            });
            result.civil.pps.ppsList.forEach(function(element) {
                var token = element.token;
                tokenArr.civil.ppn.ppnList.push(token);
            });
            result.non.events.eventsList.forEach(function(element) {
                var token = element.token;
                tokenArr.non.events.eventsList.push(token);
            });
            return res.status(201).json({"tokens":tokenArr})
        }
    })
}
module.exports = updatesCheck