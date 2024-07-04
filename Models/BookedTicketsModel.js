const { Schema, default: mongoose } = require("mongoose");
const { Tickets } = require("./TicketsModel");

const BookedTicketsSchema= new Schema({
    ticketsID:{
        type:mongoose.Types.ObjectId,
        ref:Tickets,
        required:true,
    },
    userID:{
        type:number,
        default:1111,
    }
})
export const BookedTickets=mongoose.models.BookedTickets||mongoose.model("BookedTickets",BookedTicketsSchema)