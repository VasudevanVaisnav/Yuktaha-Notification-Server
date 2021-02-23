const mongoose = require("mongoose")
const dbSchema = mongoose.Schema({
    yukToken:{type:String, required:true},
    cse:{
        cseToken:{type:String, required:true},
        events:{
            eventsToken:{type:String, required:true},
            eventsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                eventId:{type:Number, required:true, unique:true},
                studentCoordinator:[{
                    name:{type:String, required:true},
                    class:{type:String, required:true},
                    contactno:{type:Number, required:true},
                    contactemail:{type:String, required:true}
                }],
                facultyCoordinator:[{
                    name:{type:String, required:true},
                    designation:{type:String, required:true},
                    role:{type:String, required:true}
                }],
                generalRules:[{
                    ruleNo:{type:Number,required:true},
                    rule:{type:String,required:true}
                }],
                rounds:[{
                    roundNo:{type:Number, required:true},
                    roundName:{type:String, required:false},
                    roundDescription:{type:String, required:true},
                    roundRules:[{
                        roundRuleNo:{type:Number,required:true},
                        roundRule:{type:String,required:true}
                    }],
                    roundStartDate:{type:Date,required:false},
                    roundEndDate:{type:Date,required:false}
                }],
                eventStartDate:{type:Date,required:false},
                eventsEndDate:{type:Date,required:false}
            }]
        },
        workshops:{
            workshopsToken:{type:String, required:true},
            workshopsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                workshopId:{type:Number, required:true, unique:true},
                studentCoordinator:[{
                    name:{type:String, required:true},
                    class:{type:String, required:true},
                    contactno:{type:Number, required:true},
                    contactemail:{type:String, required:true}
                }],
                facultyCoordinator:[{
                    name:{type:String, required:true},
                    designation:{type:String, required:true},
                    role:{type:String, required:true}
                }],
                fees:{type:Number,required:true},
                workshopStartTime:{type:Date,required:false},
                workshopEndTime:{type:Date,required:false},
                workshopStartDate:{type:Date,required:false},
                workshopEndDate:{type:Date,required:false}
            }]
        },
        pps:{
            ppsToken:{type:String, required:true},
            ppsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                ppId:{type:Number, required:true, unique:true},
                fees:{type:Number,required:true},
                studentCoordinator:[{
                    name:{type:String, required:true},
                    class:{type:String, required:true},
                    contactno:{type:Number, required:true},
                    contactemail:{type:String, required:true}
                }],
                facultyCoordinator:[{
                    name:{type:String, required:true},
                    designation:{type:String, required:true},
                    role:{type:String, required:true}
                }],
                ppsStartDate:{type:Date,required:false},
                ppsEndDate:{type:Date,required:false}
            }]
        }
    },
    ece:{
        eceToken:{type:String, required:true},
        events:{
            eventsToken:{type:String, required:true},
            eventsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                eventId:{type:Number, required:true, unique:true},
                studentCoordinator:[{
                    name:{type:String, required:true},
                    class:{type:String, required:true},
                    contactno:{type:Number, required:true},
                    contactemail:{type:String, required:true}
                }],
                facultyCoordinator:[{
                    name:{type:String, required:true},
                    designation:{type:String, required:true},
                    role:{type:String, required:true}
                }],
                generalRules:[{
                    ruleNo:{type:Number,required:true},
                    rule:{type:String,required:true}
                }],
                rounds:[{
                    roundNo:{type:Number, required:true},
                    roundName:{type:String, required:false},
                    roundDescription:{type:String, required:true},
                    roundRules:[{
                        roundRuleNo:{type:Number,required:true},
                        roundRule:{type:String,required:true}
                    }],
                    roundStartDate:{type:Date,required:false},
                    roundEndDate:{type:Date,required:false}
                }],
                eventStartDate:{type:Date,required:false},
                eventsEndDate:{type:Date,required:false}
            }]
        },
        workshops:{
            workshopsToken:{type:String, required:true},
            workshopsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                workshopId:{type:Number, required:true, unique:true},
                studentCoordinator:[{
                    name:{type:String, required:true},
                    class:{type:String, required:true},
                    contactno:{type:Number, required:true},
                    contactemail:{type:String, required:true}
                }],
                facultyCoordinator:[{
                    name:{type:String, required:true},
                    designation:{type:String, required:true},
                    role:{type:String, required:true}
                }],
                fees:{type:Number,required:true},
                workshopStartTime:{type:Date,required:false},
                workshopEndTime:{type:Date,required:false},
                workshopStartDate:{type:Date,required:false},
                workshopEndDate:{type:Date,required:false}
            }]
        },
        pps:{
            ppsToken:{type:String, required:true},
            ppsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                ppId:{type:Number, required:true, unique:true},
                fees:{type:Number,required:true},
                studentCoordinator:[{
                    name:{type:String, required:true},
                    class:{type:String, required:true},
                    contactno:{type:Number, required:true},
                    contactemail:{type:String, required:true}
                }],
                facultyCoordinator:[{
                    name:{type:String, required:true},
                    designation:{type:String, required:true},
                    role:{type:String, required:true}
                }],
                ppsStartDate:{type:Date,required:false},
                ppsEndDate:{type:Date,required:false}
            }]
        }
    },
    eee:{
        eeeToken:{type:String, required:true},
        events:{
            eventsToken:{type:String, required:true},
            eventsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                eventId:{type:Number, required:true, unique:true},
                studentCoordinator:[{
                    name:{type:String, required:true},
                    class:{type:String, required:true},
                    contactno:{type:Number, required:true},
                    contactemail:{type:String, required:true}
                }],
                facultyCoordinator:[{
                    name:{type:String, required:true},
                    designation:{type:String, required:true},
                    role:{type:String, required:true}
                }],
                generalRules:[{
                    ruleNo:{type:Number,required:true},
                    rule:{type:String,required:true}
                }],
                rounds:[{
                    roundNo:{type:Number, required:true},
                    roundName:{type:String, required:false},
                    roundDescription:{type:String, required:true},
                    roundRules:[{
                        roundRuleNo:{type:Number,required:true},
                        roundRule:{type:String,required:true}
                    }],
                    roundStartDate:{type:Date,required:false},
                    roundEndDate:{type:Date,required:false}
                }],
                eventStartDate:{type:Date,required:false},
                eventsEndDate:{type:Date,required:false}
            }]
        },
        workshops:{
            workshopsToken:{type:String, required:true},
            workshopsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                workshopId:{type:Number, required:true, unique:true},
                studentCoordinator:[{
                    name:{type:String, required:true},
                    class:{type:String, required:true},
                    contactno:{type:Number, required:true},
                    contactemail:{type:String, required:true}
                }],
                facultyCoordinator:[{
                    name:{type:String, required:true},
                    designation:{type:String, required:true},
                    role:{type:String, required:true}
                }],
                fees:{type:Number,required:true},
                workshopStartTime:{type:Date,required:false},
                workshopEndTime:{type:Date,required:false},
                workshopStartDate:{type:Date,required:false},
                workshopEndDate:{type:Date,required:false}
            }]
        },
        pps:{
            ppsToken:{type:String, required:true},
            ppsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                ppId:{type:Number, required:true, unique:true},
                fees:{type:Number,required:true},
                studentCoordinator:[{
                    name:{type:String, required:true},
                    class:{type:String, required:true},
                    contactno:{type:Number, required:true},
                    contactemail:{type:String, required:true}
                }],
                facultyCoordinator:[{
                    name:{type:String, required:true},
                    designation:{type:String, required:true},
                    role:{type:String, required:true}
                }],
                ppsStartDate:{type:Date,required:false},
                ppsEndDate:{type:Date,required:false}
            }]
        }
    },
    mech:{
        mechToken:{type:String, required:true},
        events:{
            eventsToken:{type:String, required:true},
            eventsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                eventId:{type:Number, required:true, unique:true},
                studentCoordinator:[{
                    name:{type:String, required:true},
                    class:{type:String, required:true},
                    contactno:{type:Number, required:true},
                    contactemail:{type:String, required:true}
                }],
                facultyCoordinator:[{
                    name:{type:String, required:true},
                    designation:{type:String, required:true},
                    role:{type:String, required:true}
                }],
                generalRules:[{
                    ruleNo:{type:Number,required:true},
                    rule:{type:String,required:true}
                }],
                rounds:[{
                    roundNo:{type:Number, required:true},
                    roundName:{type:String, required:false},
                    roundDescription:{type:String, required:true},
                    roundRules:[{
                        roundRuleNo:{type:Number,required:true},
                        roundRule:{type:String,required:true}
                    }],
                    roundStartDate:{type:Date,required:false},
                    roundEndDate:{type:Date,required:false}
                }],
                eventStartDate:{type:Date,required:false},
                eventsEndDate:{type:Date,required:false}
            }]
        },
        workshops:{
            workshopsToken:{type:String, required:true},
            workshopsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                workshopId:{type:Number, required:true, unique:true},
                studentCoordinator:[{
                    name:{type:String, required:true},
                    class:{type:String, required:true},
                    contactno:{type:Number, required:true},
                    contactemail:{type:String, required:true}
                }],
                facultyCoordinator:[{
                    name:{type:String, required:true},
                    designation:{type:String, required:true},
                    role:{type:String, required:true}
                }],
                fees:{type:Number,required:true},
                workshopStartTime:{type:Date,required:false},
                workshopEndTime:{type:Date,required:false},
                workshopStartDate:{type:Date,required:false},
                workshopEndDate:{type:Date,required:false}
            }]
        },
        pps:{
            ppsToken:{type:String, required:true},
            ppsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                ppId:{type:Number, required:true, unique:true},
                fees:{type:Number,required:true},
                studentCoordinator:[{
                    name:{type:String, required:true},
                    class:{type:String, required:true},
                    contactno:{type:Number, required:true},
                    contactemail:{type:String, required:true}
                }],
                facultyCoordinator:[{
                    name:{type:String, required:true},
                    designation:{type:String, required:true},
                    role:{type:String, required:true}
                }],
                ppsStartDate:{type:Date,required:false},
                ppsEndDate:{type:Date,required:false}
            }]
        }
    },
    civil:{
        civilToken:{type:String, required:true},
        events:{
            eventsToken:{type:String, required:true},
            eventsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                eventId:{type:Number, required:true, unique:true},
                studentCoordinator:[{
                    name:{type:String, required:true},
                    class:{type:String, required:true},
                    contactno:{type:Number, required:true},
                    contactemail:{type:String, required:true}
                }],
                facultyCoordinator:[{
                    name:{type:String, required:true},
                    designation:{type:String, required:true},
                    role:{type:String, required:true}
                }],
                generalRules:[{
                    ruleNo:{type:Number,required:true},
                    rule:{type:String,required:true}
                }],
                rounds:[{
                    roundNo:{type:Number, required:true},
                    roundName:{type:String, required:false},
                    roundDescription:{type:String, required:true},
                    roundRules:[{
                        roundRuleNo:{type:Number,required:true},
                        roundRule:{type:String,required:true}
                    }],
                    roundStartDate:{type:Date,required:false},
                    roundEndDate:{type:Date,required:false}
                }],
                eventStartDate:{type:Date,required:false},
                eventsEndDate:{type:Date,required:false}
            }]
        },
        workshops:{
            workshopsToken:{type:String, required:true},
            workshopsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                workshopId:{type:Number, required:true, unique:true},
                studentCoordinator:[{
                    name:{type:String, required:true},
                    class:{type:String, required:true},
                    contactno:{type:Number, required:true},
                    contactemail:{type:String, required:true}
                }],
                facultyCoordinator:[{
                    name:{type:String, required:true},
                    designation:{type:String, required:true},
                    role:{type:String, required:true}
                }],
                fees:{type:Number,required:true},
                workshopStartTime:{type:Date,required:false},
                workshopEndTime:{type:Date,required:false},
                workshopStartDate:{type:Date,required:false},
                workshopEndDate:{type:Date,required:false}
            }]
        },
        pps:{
            ppsToken:{type:String, required:true},
            ppsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                ppId:{type:Number, required:true, unique:true},
                fees:{type:Number,required:true},
                studentCoordinator:[{
                    name:{type:String, required:true},
                    class:{type:String, required:true},
                    contactno:{type:Number, required:true},
                    contactemail:{type:String, required:true}
                }],
                facultyCoordinator:[{
                    name:{type:String, required:true},
                    designation:{type:String, required:true},
                    role:{type:String, required:true}
                }],
                ppsStartDate:{type:Date,required:false},
                ppsEndDate:{type:Date,required:false}
            }]
        }
    }
})
module.exports = mongoose.model('db',dbSchema);