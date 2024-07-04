"use server"

import React from 'react'

async function FindAvailableBusWithConditionsAction(from,destination) {

    try{
        console.log("trying to Find Available Bus With Conditions")
        const availableBuses=await fetch(`http://localhost:3000/api/findAvailableBusWithConditions?from=${from}&destination=${destination}`,{
            cache:"no-store",
        })
        // if(!availableBuses.ok){
        //     throw new Error("something went wrong!")
        // }
        return await availableBuses.json();
        
    }catch(err){
        console.log(err);
        throw new Error("failed to Find Available Bus With Conditions")
    }
}

export default FindAvailableBusWithConditionsAction