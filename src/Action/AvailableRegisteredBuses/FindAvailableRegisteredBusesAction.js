"use server";
import React from 'react'

async function FindAvailableRegisteredBusesAction() {
    try {
        const res = await fetch("https://busknow.pages.dev/api/availableRegisteredBus", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("failed to fetch data");
        }
        return res.json();
      } catch (err) {
        console.log("error loading topics: ", err);
      }
}

export default FindAvailableRegisteredBusesAction;