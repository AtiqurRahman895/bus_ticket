import { NextRequest, NextResponse } from "next/server";
import { AvailableBusByDate } from "../../../../Models/AvailableBusByDateModel";
import { DBconnect } from "../../../../DBconnect";
import { AvailableRegisteredBus } from "../../../../Models/AvailableRegisteredBusModel";


export const GET = async (req) => {
  console.log(`im herererer1`)
  const searchParams=await req.nextUrl.searchParams
  const from=await searchParams.get("from")
  const destination=await searchParams.get("destination")
    await DBconnect();
    console.log(`im herererer2`, from,destination)
    try {
      const availableBuses = await AvailableBusByDate.find({ from:from, destination:destination }).populate({
        path: "availavleBusID",
        select: "_id busName from destination perSeatCoast totalBusSeat time ",
        model: AvailableRegisteredBus,
      });
      console.log(availableBuses)

      return NextResponse.json({ availableBuses });
    } catch (err) {
      console.log(err);
      throw new Error("failed to find available buses by date");
    }
  };