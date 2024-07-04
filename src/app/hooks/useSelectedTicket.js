"use client";
import React, { useEffect, useState } from "react";
import SelectedTickets from "../(components)/SelectedTickets";

function useSelectedTicket() {
  const [selectedTickets, setSelectedTickets] = useState(["emon"]);

  return {selectedTickets, setSelectedTickets}

      
}


export default useSelectedTicket;
