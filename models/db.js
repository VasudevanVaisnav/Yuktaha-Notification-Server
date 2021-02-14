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
                eventId:{type:Number, required:true, unique:true}
            }]
        },
        workshops:{
            workshopsToken:{type:String, required:true},
            workshopsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                workshopId:{type:Number, required:true, unique:true}
            }]
        },
        pps:{
            ppsToken:{type:String, required:true},
            ppsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                ppId:{type:Number, required:true, unique:true}
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
                eventId:{type:Number, required:true, unique:true}
            }]
        },
        workshops:{
            workshopsToken:{type:String, required:true},
            workshopsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                workshopId:{type:Number, required:true, unique:true}
            }]
        },
        pps:{
            ppsToken:{type:String, required:true},
            ppsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                ppId:{type:Number, required:true, unique:true}
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
                eventId:{type:Number, required:true, unique:true}
            }]
        },
        workshops:{
            workshopsToken:{type:String, required:true},
            workshopsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                workshopId:{type:Number, required:true, unique:true}
            }]
        },
        pps:{
            ppsToken:{type:String, required:true},
            ppsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                ppId:{type:Number, required:true, unique:true}
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
                eventId:{type:Number, required:true, unique:true}
            }]
        },
        workshops:{
            workshopsToken:{type:String, required:true},
            workshopsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                workshopId:{type:Number, required:true, unique:true}
            }]
        },
        pps:{
            ppsToken:{type:String, required:true},
            ppsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                ppId:{type:Number, required:true, unique:true}
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
                eventId:{type:Number, required:true, unique:true}
            }]
        },
        workshops:{
            workshopsToken:{type:String, required:true},
            workshopsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                workshopId:{type:Number, required:true, unique:true}
            }]
        },
        pps:{
            ppsToken:{type:String, required:true},
            ppsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                ppId:{type:Number, required:true, unique:true}
            }]
        }
    },
    non:{
        nonToken:{type:String, required:true},
        events:{
            eventsToken:{type:String, required:true},
            eventsList:[{
                token:{type:String, required:true},
                name:{type:String, required:true},
                desc:{type:String, required:true},
                eventId:{type:Number, required:true, unique:true}
            }]
        }
    }
})
module.exports = mongoose.model('db',dbSchema);