import { NextResponse } from "next/server";
import { DBconnect } from "../../../../DBconnect";
import { AvailableBusByDate } from "../../../../Models/AvailableBusByDateModel";
import { AvailableRegisteredBus } from "../../../../Models/AvailableRegisteredBusModel";

export const POST = async (req) => {
  await DBconnect();
  const { from, destination, date, availavleBusID } = await req.json();
  try {
    await AvailableBusByDate.create({
      from,
      destination,
      date,
      availavleBusID,
    });
    return NextResponse.json("Available bus successfully stored by date");
  } catch (err) {
    console.log(err);
    throw new Error("failed to store available bus by date");
  }
};

// find all
export const GET = async (req) => {
  await DBconnect();
  console.log("log3");
  try {
    const availableBuses = await AvailableBusByDate.find().populate({
      path: "availavleBusID",
      select: "_id busName from destination perSeatCoast totalBusSeat time ",
      model: AvailableRegisteredBus,
    });
    return NextResponse.json({ availableBuses });
  } catch (err) {
    console.log(err);
    throw new Error("failed to find available buses by date");
  }
};

export const DELETE = async (req) => {
  await DBconnect();
  const { availavleBusID } = await req.json();
  try {
    console.log("in process of deleting 222 ", availavleBusID);
    await AvailableBusByDate.findByIdAndDelete(availavleBusID);
    return NextResponse.json("outdated available buses by date is deleted");
  } catch (err) {
    console.log(err);
    throw new Error("failed to delete outdated available buses by date");
  }
};
