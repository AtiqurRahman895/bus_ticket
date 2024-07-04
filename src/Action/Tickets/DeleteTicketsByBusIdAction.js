"use server"
import React from 'react'

async function DeleteTicketsByBusIdAction(busId) {
  console.log("hereee",busId)
    try {
        const res=await fetch(`http://localhost:3000/api/tickets/${busId}`,{
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