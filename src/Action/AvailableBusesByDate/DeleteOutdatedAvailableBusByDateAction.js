"use server"
import React from 'react'

async function DeleteOutdatedAvailableBusByDateAction(availavleBusID) {
  console.log("in process of deleting 111 ", availavleBusID);
  try{const res=await fetch("http://localhost:3000/api/availableBusByDate",{
    method:"DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
        availavleBusID,
    })
  })
  if (!res.ok) {
    throw new Error("something went wrong!");
  }}catch(err){
    console.log(err);
    throw new Error("Deleting outdated bus failed");
  }
}

export default DeleteOutdatedAvailableBusByDateAction