"use client";
import AvailableBusByDatePostAction from "@/Action/AvailableBusesByDate/AvailableBusByDatePostAction";
import AvailableRegisteredBusPostAction from "@/Action/AvailableRegisteredBuses/AvailableRegisteredBusPostAction";
import BusRegisterAction from "@/Action/RegisterBuses/BusRegisterAction";
import { useForm } from "react-hook-form";

function BusRegisterPage() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      busName: "",
      firstPlace: "Dhaka",
      secondPlace: "Dhaka",
      totalBusSeat: 40,
      perSeatCoast: "1000",
      timeFirst: "9",
      timeSecond: "10",
    },
  });

  const onSubmit = async (data) => {
    const bus = await BusRegisterAction(data);

    const busID = bus._id;
    const busName = bus.busName;
    const totalBusSeat = bus.totalBusSeat;
    const perSeatCoast = bus.perSeatCoast;
    const lastBus1 = await AvailableRegisteredBusPostAction(
      busName,
      bus.firstPlace,
      bus.secondPlace,
      totalBusSeat,
      perSeatCoast,
      bus.firstTime,
      busID
    );
    const lastBus2 = await AvailableRegisteredBusPostAction(
      busName,
      bus.secondPlace,
      bus.firstPlace,
      totalBusSeat,
      perSeatCoast,
      bus.secondTime,
      busID
    );

    // console.log(lastBus1,lastBus2)

    await AvailableBusByDatePostAction(
      lastBus1.from,
      lastBus1.destination,
      new Date().toLocaleDateString(),
      lastBus1._id
    );
    await AvailableBusByDatePostAction(
      lastBus2.from,
      lastBus2.destination,
      new Date().toLocaleDateString(),
      lastBus2._id
    );

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-5 w-[50%] relative translate-x-[50%]"
    >
      <fieldset className="flex flex-col space-y-3 border border-white">
        <legend className="m-2">
          <label htmlFor="busName">Bus Name</label>
        </legend>

        <input
          className="bg-page outline-none m-2 text-lg"
          type="text"
          id="busName"
          {...register("busName", { required: true })}
        />
      </fieldset>
      <div className="flex flex-row space-x-5">
        <fieldset className="flex flex-col border border-white">
          <legend className="m-2">
            <label htmlFor="firstPlace">First Place</label>
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
            <label htmlFor="secondPlace">Second Place</label>
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

      <fieldset className="flex flex-row space-x-3 border border-white w-[30%]">
        <legend className="m-2">
          <label htmlFor="totalBusSeat">Total bus seat:</label>
        </legend>
        <select
          className="bg-page outline-none m-2 text-lg"
          name="totalBusSeat"
          id="totalBusSeat"
          {...register("totalBusSeat", { required: true })}
        >
          <option value={40}>40 seats</option>
          <option value={45}>45 seats</option>
        </select>
      </fieldset>

      <fieldset className="flex flex-row space-x-3 border border-white w-[30%]">
        <legend className="m-2">
          <label htmlFor="perSeatCoast">Per seat coast:</label>
        </legend>
        <select
          className="bg-page outline-none m-2 text-lg"
          name="perSeatCoast"
          id="perSeatCoast"
          {...register("perSeatCoast", { required: true })}
        >
          <option value="500">500 taka</option>
          <option value="1000">1000 taka</option>
          <option value="1500">1500 taka</option>
        </select>
      </fieldset>

      <fieldset className="flex flex-row space-x-3 border border-white w-[30%] bg-gray-700">
        <legend className="m-2">
          <label htmlFor="timeFirst">First Depature Time:</label>
        </legend>
        <input
          className=" bg-gray-700 outline-none m-2 text-lg"
          name="timeFirst"
          id="timeFirst"
          type="time"
          {...register("timeFirst", { required: true })}
        />
      </fieldset>

      <fieldset className="flex flex-row space-x-3 border border-white w-[30%] bg-gray-700">
        <legend className="m-2">
          <label htmlFor="timeSecond">Second Depature Time:</label>
        </legend>
        <input
          className=" bg-gray-700 outline-none m-2 text-lg"
          name="timeSecond"
          id="timeSecond"
          type="time"
          {...register("timeSecond", { required: true })}
        />
      </fieldset>

      <button
        className="w-[15%] h-[40px] text-lg font-semi-bold bg-green-1 text-black m-auto "
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default BusRegisterPage;
