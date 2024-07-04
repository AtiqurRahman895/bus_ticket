"use server";
import React from "react";
import FindAvailableRegisteredBusesAction from "./FindAvailableRegisteredBusesAction";

async function AvailableRegisteredBusPostAction(
  busName,
  from,
  destination,
  totalBusSeat,
  perSeatCoast,
  time,
  busId
) {
  try {
    const res = await fetch(
      "https://busknow.pages.dev/api/availableRegisteredBus",
      {
        method: "POST",
        headers: {
          "content-type": "applicatiion/json",
        },
        body: JSON.stringify({
          busName,
          from,
          destination,
          totalBusSeat,
          perSeatCoast,
          time,
          busId,
        }),
      }
    );
    if (!res.ok) {
      throw new Error("something went wrong!");
    }
  } catch (err) {
    console.log(err);
    throw new Error("Available bus registration failed!");
  }
  // Find/Get
  const { buses } = await FindAvailableRegisteredBusesAction();
  return buses[buses.length - 1];
}

export default AvailableRegisteredBusPostAction;
