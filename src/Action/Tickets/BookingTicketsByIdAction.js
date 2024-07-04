"use server";
import React from "react";

async function BookingTicketsByIdAction(id) {
  const ticketState="booked";
  try {
    const res = await fetch(`https://busknow.pages.dev/api/tickets/${id}`, {
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
