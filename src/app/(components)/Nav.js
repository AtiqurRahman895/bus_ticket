// "use client";
// import Link from "next/link";
// import React, { useEffect } from "react";
// import UpdateAvailableBuses from "./UpdateAvailableBuses";
// import FindAvailableBusByDateAction from "@/Action/AvailableBusesByDate/FindAvailableBusByDateAction";

// function Nav() {
//     let buses=[];
//   const callForBuses = async () => {
//     const { availableBuses } = await FindAvailableBusByDateAction();


//   buses= {availableBuses};

//   };
//   useEffect(() => {
//     callForBuses()
//   },[]);
//   console.log(buses)

//   return (
//     <div className="flex flex-row justify-between w-[90%] mx-auto">
//       <div className="flex flex-row space-x-5">
//         <Link href="/"> Home </Link>
//         <Link href="../BusRegisterPage"> Bus Register </Link>
//         <Link href="../AvailableBusesPage">Available Buses</Link>
//       </div>
//       <UpdateAvailableBuses buses={buses} />
//     </div>
//   );
// }

// export default Nav;
