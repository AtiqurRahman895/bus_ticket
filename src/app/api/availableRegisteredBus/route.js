import { NextResponse } from "next/server";
import { DBconnect } from "../../../../DBconnect";
import { AvailableRegisteredBus } from "../../../../Models/AvailableRegisteredBusModel";

export const POST = async (req) => {
  const {
    busName,
    from,
    destination,
    totalBusSeat,
    perSeatCoast,
    time,
    busId,
  } = await req.json();

  try {
    DBconnect();

    await AvailableRegisteredBus.create({
      busName,
      from,
      destination,
      totalBusSeat,
      perSeatCoast,
      time,
      busId,
    });
    return NextResponse.json("successfully stored available registered buses ");
  } catch (error) {
    console.log(error);
    throw new Error("failed to store available bus");
  }
};

// find/GET

export async function GET() {
  // try {
  await DBconnect();
  console.log("connected to 333db");
  const buses = await AvailableRegisteredBus.find().populate("busId");
  return NextResponse.json({ buses });
  // } catch (error) {
  //   console.log(error);
  //   throw new Error("buses were not found for some reason");
  // }
}
