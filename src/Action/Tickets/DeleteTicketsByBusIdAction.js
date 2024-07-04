"use server"
import React from 'react'

async function DeleteTicketsByBusIdAction(busId) {
  console.log("hereee",busId)
    try {
        const res=await fetch(`https://busknow.pages.dev/api/tickets/${busId}`,{
          method:"DELETE"
        })
        if (!res.ok) {
          throw new Error("failed to delete tickets");
        }
      } catch (err) {
        console.log(err);
      }
}

export default DeleteTicketsByBusIdAction