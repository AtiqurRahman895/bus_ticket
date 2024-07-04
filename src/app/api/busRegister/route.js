import { NextResponse } from "next/server";

import { DBconnect } from "../../../../DBconnect";
import { bus } from "../../../../Models/BusRegisterModel";

export const POST = async (req) => {
  const { busName, firstPlace, secondPlace, totalBusSeat, perSeatCoast,firstTime,
    secondTime } =
    await req.json();

  try {
    await DBconnect();
    console.log("connected to 2222db");
    await bus.create({
      busName,
      firstPlace,
      secondPlace,
      totalBusSeat,
      perSeatCoast,
      firstTime,
      secondTime
    });

    console.log("connected to 333db");
    // await bus.save;
    return NextResponse.json("bus was registered");
  } catch (error) {
    console.log(error);
    throw new Error("bus was not registered");
  }
  
};


// find/GET

export async function GET() {
  // try {
  await DBconnect();
  console.log("connected to 333db");
  const buses = await bus.find();
  return NextResponse.json({ buses });
  // } catch (error) {
  //   console.log(error);
  //   throw new Error("buses were not found for some reason");
  // }
}
