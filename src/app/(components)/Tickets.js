"use client";
import BookingTicketsByIdAction from "@/Action/Tickets/BookingTicketsByIdAction";
import { useRouter } from "next/navigation";
// import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import Img from "../../../public/svgs/ChairSvg.svg";
import Image from "next/image";
import { useSelectedTickets } from "../Context/SelectedTicketsContext";
// import { selectedTicket } from "../bus/[id]/page";

function Tickets({ tickets, slectedTickets }) {
  const router = useRouter();
  const { selectedTickets, setSelectedTickets } = useSelectedTickets();
  const { handleSubmit, register, reset, watch } = useForm({
    defaultValues: {
      selectedTickets: [],
    },
  });
  let watchSelection = watch(["selectedTickets"]);
  const setSelectedArray = (e) => {
    const ticketId = e.target.value;
    if (e.target.checked) {
      setSelectedTickets([...selectedTickets, ticketId]);
    } else {
      setSelectedTickets(selectedTickets.filter((id) => id !== ticketId));
    }
  };
  

  const bookTicket = async (id) => {
    await BookingTicketsByIdAction(id);
  };
  const onSubmit = (data) => {
    data.selectedTickets.map((id, index) => {
      bookTicket(id);
      router.refresh();
      setSelectedTickets([])
    });
  };
  // console.log("fuck", tickets);
  return (
    <>
      <section className="ticketWraper bg-green-1 w-[70%] max-w-[300px] space-y-9 mx-auto md:m-0">
        <div className="colorPurpus">
          <div className="flex space-x-1 items-center">
            <div className="bg-red-500 w-[16px] h-[16px]"></div>
            <p>Booked</p>
          </div>
          <div className="flex space-x-1 items-center">
            <div className="bg-slate-50 w-[16px] h-[16px]"></div>
            <p>Available</p>
          </div>
          <div className="flex space-x-1 items-center">
            <div className="bg-green-500 w-[16px] h-[16px]"></div>
            <p>Selected</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" pb-4  space-y-3 rounded-t-3xl text-center w-[100%]"
        >
          <fieldset className="grid px-4 grid-cols-4 gap-6">
            {tickets.map((ticket) => (
              <label htmlFor={ticket._id} key={ticket.ticketNumber}>
                <input
                  
                  className="text-red text-[6rem ] peer hidden"
                  type="checkbox"
                  id={ticket._id}
                  onClick={setSelectedArray}
                  name="selectedTickets"
                  value={ticket._id}
                  {...register("selectedTickets", {
                    disabled: ticket.ticketState == "booked",
                  })}
                />
                <Image
                  src={Img}
                  alt="bus"
                  className={`${
                    ticket.ticketState == "booked"
                      ? "bg-red-500 w-[2rem] h-[2rem] p-[3px] rounded-2xl"
                      : "w-[2rem] h-[2rem] p-[3px] rounded-2xl bg-slate-50 peer-checked:bg-green-500 cursor-pointer"
                  }`}
                ></Image>
              </label>
            ))}
          </fieldset>

          <button type="submit" className="bg-card p-2 rounded-lg">
            Book Now
          </button>
        </form>
      </section>
    </>
  );
}

export default Tickets;
