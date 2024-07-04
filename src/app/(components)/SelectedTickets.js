"use client";
import React, { useEffect } from "react";
import { useSelectedTickets } from "../Context/SelectedTicketsContext";

function SelectedTickets({perTicketPrice}) {
  const { selectedTickets} = useSelectedTickets();

  return (
    <div className="space-y-6">
      {
        selectedTickets.length?<h2>Selected Tickets IDs:</h2>:<p className="text-green-1">No Ticket Selected yet!</p>
      }
      
      <div className="space-y-3 ">
        {selectedTickets.map((selectedTicket, index) => (
          <h3 className="bg-green-1 p-2 w-fit" key={index}>{selectedTicket}</h3>
        ))}
      </div>

      {
        selectedTickets.length?<div className="space-y-3">
          <h2>Total Price:</h2>
          <p>{perTicketPrice*selectedTickets.length}৳</p>
        </div>:null
      }

      
    </div>
  );
}

export default SelectedTickets;
