"use server"
import React from 'react'
import FindAvailableBusByDateAction from './FindAvailableBusByDateAction'
import TicketsPostAction from '../Tickets/TicketsPostAction'



async function AvailableBusByDatePostAction(from,destination,date,availavleBusID) {
    
    try{

        const res=await fetch("https://busknow.pages.dev/api/availableBusByDate",{
            method:"POST",
            headers: {
                "content-type": "applicatiion/json",
              },
              body: JSON.stringify({
                from,destination,date,availavleBusID,
              }),
        })
        if(!res.ok){
            throw new Error("something went wrong!")
        }
    }catch(err){
        console.log(err);
        throw new Error("failed to post request AvailableBusByDate")
    }

    const {availableBuses}= await FindAvailableBusByDateAction();
    const lastAavailableBus= await availableBuses[availableBuses.length-1];
    const totalSeatOFTheBus=lastAavailableBus.availavleBusID.totalBusSeat
    let i=1
    while (i<=totalSeatOFTheBus) {
        await TicketsPostAction(i,lastAavailableBus._id);
        i++
    }

}

export default AvailableBusByDatePostAction;
