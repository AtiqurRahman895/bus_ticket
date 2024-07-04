

const { default: mongoose, Schema } = require("mongoose");


const AvailableBusByDateSchema =new Schema({
    from:{
        type:String,
        required:true,
    },
    destination:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    availavleBusID:{
        type:mongoose.Types.ObjectId,
        ref:"AvailableRegisteredBus",
        required:true,
    }
})
export const AvailableBusByDate=mongoose.models.AvailableBusByDate||mongoose.model("AvailableBusByDate",AvailableBusByDateSchema)