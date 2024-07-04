import { NextResponse } from "next/server";
import { DBconnect } from "../../../../../DBconnect";
import { AvailableBusByDate } from "../../../../../Models/AvailableBusByDateModel";
import { Tickets } from "../../../../../Models/TicketsModel";
import { AvailableRegisteredBus } from "../../../../../Models/AvailableRegisteredBusModel";

export const GET = async (req,{ params }) => {
    const { id } = await params;
    try {
      await DBconnect()
      const bus=await AvailableBusByDate.findById(id).populate({
        path: "availavleBusID",
        select: "_id busName from destination perSeatCoast totalBusSeat time ",
        model: AvailableRegisteredBus,
      });
      return NextResponse.json({bus});
    } catch (err) {
      console.log(err);
      throw new Error(`failed to fetch bus with ID ${id} `);
    }
  };