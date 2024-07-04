"use client"
import React, { createContext, useContext, useState } from "react";
const SelectedTicketsContext = createContext();
export function SelectedTicketsContextProvider({ children }) {
  const [selectedTickets, setSelectedTickets] = useState([]);
  return (
    <SelectedTicketsContext.Provider
      value={{ selectedTickets, setSelectedTickets }}
    >
      {children}
    </SelectedTicketsContext.Provider>
  );
}
export function useSelectedTickets() {
  return useContext(SelectedTicketsContext);
}
