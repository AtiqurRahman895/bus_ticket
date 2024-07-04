"use client";
import AvailableBusByDatePostAction from "@/Action/AvailableBusesByDate/AvailableBusByDatePostAction";
import DeleteOutdatedAvailableBusByDateAction from "@/Action/AvailableBusesByDate/DeleteOutdatedAvailableBusByDateAction";
import DeleteTicketsByBusIdAction from "@/Action/Tickets/DeleteTicketsByBusIdAction";
import { deleteModel } from "mongoose";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export function UpdateAvailableBuses({ buses }) {
  const router = useRouter();
  const [date, setDate] = useState();
  const [time, setTime] = useState("");
  let tommrow = new Date();
  tommrow.setDate(tommrow.getDate() + 1);
  let nextday = tommrow.toLocaleDateString();

  let availavleBusID = [];
  let busFrom = [];
  let busDestination = [];
  let busDate = [];
  let busTime = [];
  let registeredbusesId = [];

  const getBusData = () => {
    buses.map((bus, index) => {
      availavleBusID[index] = bus._id;
      (busFrom[index] = bus.from),
        (busDestination[index] = bus.destination),
        (busDate[index] = bus.date);
      busTime[index] = bus.availavleBusID.time;
      registeredbusesId[index] = bus.availavleBusID._id;
    });
  };
  useEffect(() => {
    getBusData();
  }, []);

  const deleteBus = async (index) => {
    await DeleteOutdatedAvailableBusByDateAction(availavleBusID[index]);
  };
  const deleteTickets = async (index) => {
    await DeleteTicketsByBusIdAction(availavleBusID[index]);
  };
  const updateBus = async (index) => {
    await AvailableBusByDatePostAction(
      busFrom[index],
      busDestination[index],
      nextday,
      registeredbusesId[index]
    );
  };
  const checkDateAndDelete = () => {
    busDate.map((sBDate, index) => {
      if (sBDate == new Date().toLocaleDateString()) {
        if (
          busTime[index] ==
          new Date().toLocaleTimeString(undefined, {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          })
        ) {
          console.log("matched with ", availavleBusID[index]);
          deleteBus(index);
          deleteTickets(index);
          updateBus(index);
          router.refresh();
        } else {
          return null;
        }
      } else {
        return null;
      }
    });
  };

  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleDateString());
      setTime(
        new Date().toLocaleTimeString(undefined, {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        })
      );
      checkDateAndDelete();
    }, 1000);
  }, []);

  return (
    <>
      <div className="hidden lg:block">
        <div className="flex flex-col space-x-4 items-center">
          <p>{date}</p>
          {/* <p>Tommorow: {nextday}</p> */}
          <p>{time}</p>
        </div>
      </div>
    </>
  );
}

export default UpdateAvailableBuses;
