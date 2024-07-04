"use client";
import React, { useEffect, useState } from "react";
import SelectedTickets from "../(components)/SelectedTickets";

function useSelectedTicket() {
  const [selectedTickets, setSelectedTickets] = useState([]);

  return {selectedTickets, setSelectedTickets}

      
}


export default useSelectedTicket;
