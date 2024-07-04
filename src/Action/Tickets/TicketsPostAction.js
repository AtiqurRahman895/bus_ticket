"use server";
import React from "react";

async function TicketsPostAction(ticketNumber, busID) {
  try {
    const res = await fetch("http://localhost:3000/api/tickets", {
      method: "POST",
      headers: {
        "content-type": "aplication/json",
      },
      body: JSON.stringify({ ticketNumber, ticketState: "available", busID }),
    });
    if (!res.ok) {
      throw new Error(
        `failed to creat tickets number ${ticketNumber} of bus id `,
        busID
      );
    }
  } catch (err) {
    console.log(err);
    throw new Error("something went wrong");
  }
}

export default TicketsPostAction;
