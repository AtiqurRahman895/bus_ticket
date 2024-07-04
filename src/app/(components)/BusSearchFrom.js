"use client";
import FindAvailableBusByDateAction from "@/Action/AvailableBusesByDate/FindAvailableBusByDateAction";
import FindAvailableBusWithConditionsAction from "@/Action/AvailableBusesByDate/FindAvailableBusWithConditionsAction";
import FindAvailableRegisteredBusesAction from "@/Action/AvailableRegisteredBuses/FindAvailableRegisteredBusesAction";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
function BusSearchFrom() {
  const [buses, setBuses] = useState([]);
  const [from, setFrom] = useState();
  const [destination, setDestination] = useState();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      firstPlace: "Dhaka",
      secondPlace: "Dhaka",
    },
  });

  const allBuses = async () => {
    // const availableBuses = await fetch("http://localhost:3000/api/availableBusByDate", {
    //   cache: "no-store",
    // })
    const { availableBuses } = await FindAvailableBusByDateAction();
    setBuses(availableBuses);
  };
  useEffect(() => {
    allBuses();
  }, []);


  const onSubmit = async (data) => {
    const { availableBuses } = await FindAvailableBusWithConditionsAction(
      data.firstPlace,
      data.secondPlace
    );

    setBuses(availableBuses);
    setFrom(data.firstPlace);
    setDestination(data.secondPlace);
  };

  const bringBackAll = () => {
    reset();
    setFrom();
    setDestination();
    allBuses();
  };
  console.log(`setBuses`, buses);
  console.log("from", from);

  return (
    <div className="space-y-10 h-[100%]">
      <section className="text-center space-y-10 formSection">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-5 w-[50%] text-center relative translate-x-[50%]"
        >
          <div className="flex flex-row justify-center space-x-5">
            <fieldset className="flex flex-col border border-white">
              <legend className="m-2">
                <label htmlFor="firstPlace">From</label>
              </legend>
              <select
                className="bg-page outline-none m-1 text-lg"
                name="firstPlace"
                id="firstPlace"
                {...register("firstPlace", { required: true })}
              >
                <option value="Dhaka">Dhaka</option>
                <option value="Chottogram">Chottogram</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
              </select>
            </fieldset>

            <fieldset className="flex flex-col border border-white">
              <legend className="m-2">
                <label htmlFor="secondPlace">Destination</label>
              </legend>
              <select
                className="bg-page outline-none m-1 text-lg"
                name="secondPlace"
                id="secondPlace"
                {...register("secondPlace", { required: true })}
              >
                <option value="Dhaka">Dhaka</option>
                <option value="Chottogram">Chottogram</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
              </select>
            </fieldset>
          </div>

          <button
            className="w-[130px] h-[40px] text-lg font-semi-bold bg-green-1 text-black m-auto "
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>

      <section className="searchResultSection">
        <div className="searchResultWraper flex flex-col space-y-9">
          <div className="md:flex space-x-5 items-center">
            <h1>
              {from && destination
                ? `${from} to ${destination}`
                : "All Available Buses"}
            </h1>
            {from && destination && (
              <button
                className="bg-green-1 h-fit p-3 rounded-md text-black"
                onClick={bringBackAll}
              >
                Show all buses
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-7 ">
            {buses.length >= 1 ? (
              buses.map((bus, index) => (
                <Link href={`/bus/${bus._id}`} key={bus._id}>
                  <div className="bg-card p-3 space-y-3 rounded-lg">
                    <h3>Time: {bus.availavleBusID.time}</h3>
                    <div className="flex justify-between items-center">
                      <div className="">
                        <p className="text-xs">Date :{bus.date}</p>
                        <p className="text-xs">
                          Seats :{bus.availavleBusID.totalBusSeat}
                        </p>
                        <h3 className="text-green-2">
                          {bus.availavleBusID.busName}
                        </h3>
                      </div>
                      <h3 className="text-green-2">
                        {bus.availavleBusID.perSeatCoast}৳
                      </h3>
                    </div>

                    <p className="text-xs">{bus._id}</p>
                    {!from && !destination ? (
                      <p className="text-xs text-green-2">
                        {bus.from} to {bus.destination}
                      </p>
                    ) : null}
                  </div>
                </Link>
              ))
            ) : (
              <h1>No bus is available in this route</h1>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BusSearchFrom;
