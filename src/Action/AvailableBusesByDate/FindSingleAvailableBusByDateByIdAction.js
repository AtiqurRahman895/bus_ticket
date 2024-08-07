"use server"
import React from 'react'

async function FindSingleAvailableBusByDateByIdAction(id) {
    try {
      console.log(id)
        const res= await fetch(`http://localhost:3000/api/availableBusByDate/${id}`,{
            cache:"no-store"
          })
        if (!res.ok) {
          throw new Error("failed to fetch bus by id");
        }

        return await res.json();
      } catch (err) {
        console.log(err);
      }
}

export default FindSingleAvailableBusByDateByIdAction