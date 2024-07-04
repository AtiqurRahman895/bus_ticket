import { NextResponse } from "next/server";
import { DBconnect } from "../../../../DBconnect"
import { Tickets } from "../../../../Models/TicketsModel";

export const POST=async (req)=>{
    const {ticketNumber,ticketState,busID}= await req.json();
    try{
        await DBconnect();
        await Tickets.create({
            ticketNumber,ticketState,busID}
        );
        return NextResponse.json("tickets are posted")
    }catch(err){
        console.log(err);
        throw new Error("Ticket was not registered");
    }
}

