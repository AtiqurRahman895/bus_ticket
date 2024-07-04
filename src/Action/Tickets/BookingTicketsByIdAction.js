"use server";
import React from "react";

async function BookingTicketsByIdAction(id) {
  const ticketState="booked";
  try {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: "PUT",
      // headers: {
      //   "content-type": "application/json",
      // },
      // body: JSON.stringify({ ticketState }),
    });

    if (!res.ok) {
      throw new Error(`${id} ticket booking failed`);
    }
  } catch (err) {
    console.log(err);
  }
}

export default BookingTicketsByIdAction;
