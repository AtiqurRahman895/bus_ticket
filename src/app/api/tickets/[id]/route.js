import { NextResponse } from "next/server";
import { DBconnect } from "../../../../../DBconnect";
import { Tickets } from "../../../../../Models/TicketsModel";

export const GET = async (req, { params }) => {
  await DBconnect();
  const { id } = await params;
  try {
    console.log("in process of finding tickets of busID ", id);
    const tickets = await Tickets.find({ busID: id });
    return NextResponse.json({ tickets });
  } catch (err) {
    console.log(err);
    throw new Error("failed to get tickets");
  }
};

export const DELETE = async (req, { params }) => {
  await DBconnect();
  const { busID } = await params;
  try {
    console.log("in process of deleting tickets of busID number ", busID);
    await Tickets.deleteMany({ busID });
    return NextResponse.json("outdated tickets by date is deleted");
  } catch (err) {
    console.log(err);
    throw new Error("failed to delete outdated tickets by date");
  }
};

export const PUT = async (req, { params }) => {
  await DBconnect();
  const { id } = await params;
  const ticketState = "booked";
  const updatedObject = { ticketState: "booked" };
  console.log("ticket no ", id, "updated to ", ticketState);
  try {
    await Tickets.findByIdAndUpdate(id, updatedObject, { new: true });
    return NextResponse.json(`${id} ticket state updated to `, ticketState);
  } catch (err) {
    console.log(err);
    throw new Error("something went wrong");
  }
};
