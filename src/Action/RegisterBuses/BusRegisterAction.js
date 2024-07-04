"use server";

import FindBusesAction from "./FindBusesAction";
import ChangeTimeTo12HourFormat from "../ChangeTimeTo12HourFormat";

export async function BusRegisterAction(data) {

  const {
    busName,
    firstPlace,
    secondPlace,
    totalBusSeat,
    perSeatCoast,
    timeFirst,
    timeSecond,
  } = data;

  const firstTime = ChangeTimeTo12HourFormat(timeFirst);
  const secondTime = ChangeTimeTo12HourFormat(timeSecond);

  console.log(firstTime, secondTime);
  // Post/Creat

  try {
    const res = await fetch("http://localhost:3000/api/busRegister/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        busName,
        firstPlace,
        secondPlace,
        totalBusSeat,
        perSeatCoast,
        firstTime,
        secondTime,
      }),
    });
    if (!res.ok) {
      throw new Error("something went wrong!");
    }
  } catch (error) {
    console.log(error);
    throw new Error("bus registration failed!");
  }

  // Find/Get
  const { buses } = await FindBusesAction();
  return buses[buses.length - 1];
}

export default BusRegisterAction;
