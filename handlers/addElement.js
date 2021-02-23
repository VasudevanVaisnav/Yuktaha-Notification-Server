//fetch
//req.body.dept->req.body.type->req.body.type+"List" <- {}
// body
// dept:"cse"||"ece"
// type:"event"||"workshop",
// name
// eventId||workshopId
// eventStartDate||workshopStartDate
// eventEndDate||workshopEndDate
const dbSchema = require('../models/db')
function generateToken(){
    var newToken = "";
    var charecterSet = "asdfghjklzxcvbnmqwertyuiop1234567890";
    for (var i = 0;i<10;i++){
        newToken+= charecterSet.charAt(Math.floor(Math.random()*charecterSet.length));
    }
    console.log(newToken);
    return newToken;
}
function addElement(req,res,next){
 dbSchema.findOne({},(err,doc)=>{
     if(!err)
     {
        if(doc[req.body.dept][req.body.type+'s']){
            // generate tokens
            let token = generateToken();
            let deptToken = generateToken();
            let objToken = generateToken();   
            let yukToken = generateToken();
            // ---
            // dynamic selector strings
            let Id = req.body.type+"Id"
            let StartDate = req.body.type+"StartDate"
            let EndDate = req.body.type+"EndDate"
            let arrString = `${req.body.dept}.${req.body.type}s.${req.body.type}sList`
            let deptTokenString = `${req.body.dept}.${req.body.dept}Token`
            let objTokenString = `${req.body.dept}.${req.body.type}sToken`
            console.log(arrString,deptTokenString);
            // ----
            let newObject = {
                token:token,
                name:req.body.name,
                [Id]:req.body[req.body.type+'Id'],
                desc:req.body.desc,
                studentCoordinator:req.body.studentCoordinator,
                facultyCoordinator:req.body.facultyCoordinator,
                generalRules:req.body.generalRules,
                rounds:req.body.rounds,
                /*fees only for workshop*/
                fees:req.body.type=='workshop'?req.body.fees:undefined,
                [StartDate]:req.body[StartDate],
                [EndDate]:req.body[EndDate]
            }
            dbSchema.updateOne({},{$set:{
                "yukToken":yukToken,
                [deptTokenString]:deptToken,
                [objTokenString]:objToken},
                $set:{"[arrString].$[ele]":newObject}},{
                    arrayFilters:[{ele:{[Id]:newObject[Id]}}]
                },(err,doc)=>{
                    if(!err){
                        return res.status(200).json({"msg":"updated","olddoc":doc})
                    }else{
                        return res.status(500).json({"msg":"error"})
                    }
                })
        }
     }
 })
}
module.exports = addElement