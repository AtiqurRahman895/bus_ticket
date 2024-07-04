"use server"
import React from 'react'

async function FindTicketsByBusIdAction(id) {

  try {
    
    const res=await fetch(`https://busknow.pages.dev/api/tickets/${id}`,{
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