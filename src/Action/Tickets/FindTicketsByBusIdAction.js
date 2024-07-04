"use server"
import React from 'react'

async function FindTicketsByBusIdAction(id) {

  try {
    
    const res=await fetch(`http://localhost:3000/api/tickets/${id}`,{
      cache:"no-store"
    })
    if (!res.ok) {
      throw new Error("failed to fetch tickets");
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }

}

export default FindTicketsByBusIdAction