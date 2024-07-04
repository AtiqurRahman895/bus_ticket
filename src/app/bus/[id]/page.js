// "use server"
import FindSingleAvailableBusByDateByIdAction from "@/Action/AvailableBusesByDate/FindSingleAvailableBusByDateByIdAction";
import FindTicketsByBusIdAction from "@/Action/Tickets/FindTicketsByBusIdAction";
import SelectedTickets from "@/app/(components)/SelectedTickets";
import Tickets from "@/app/(components)/Tickets";
import { SelectedTicketsContextProvider } from "@/app/Context/SelectedTicketsContext";
import React from "react";

async function BusPage({ params }) {
  const { id } = params;
  const { bus } = await FindSingleAvailableBusByDateByIdAction(id);
  const { tickets } = await FindTicketsByBusIdAction(id);

  return (
    <SelectedTicketsContextProvider>
      <section className="BusAndTicketSection md:flex flex-row flex-nowrap justify-between space-y-8 items-center pb-5">
        <div className="busWraper space-y-14">
          <div className="space-y-4">
            <h1 className="text-green-2">{bus.availavleBusID.busName}</h1>
            <div className="flex space-x-2">
              <h3>{bus.from}</h3>
              <p className="text-green-2"> to </p>
              <h3>{bus.destination}</h3>
            </div>
            <div className="flex space-x-2 items-baseline flex-nowrap">
              <h3 className="text-green-2">Journey Will start at </h3>
              <p> {bus.availavleBusID.time}</p>
              <p className="text-green-2">of</p> <p>{bus.date}</p>
            </div>
            <div className="flex gap-x-2 items-baseline">
              Per seat cost
              <h2 className="text-green-2">
                {bus.availavleBusID.perSeatCoast} ৳
              </h2>
              only
            </div>
          </div>
          <div className="grid">
            <SelectedTickets
              perTicketPrice={Number(bus.availavleBusID.perSeatCoast)}
            />
          </div>
        </div>

        <Tickets tickets={tickets}/>
      </section>
    </SelectedTicketsContextProvider>
  );
}

export default BusPage;

// // "use server"
// import FindSingleAvailableBusByDateByIdAction from "@/Action/AvailableBusesByDate/FindSingleAvailableBusByDateByIdAction";
// import FindTicketsByBusIdAction from "@/Action/Tickets/FindTicketsByBusIdAction";
// import Tickets from "@/app/(components)/Tickets";
// import React from "react";
// import Img from "../../../../public/ChairSvg.svg";
// import Image from "next/image";
// import { useServerAction } from 'next/server-components';

// export

// async function BusPage({ params }) {
//   let selectedT
//   const selectTicketsArray = useServerAction(async (array) => {
//     selectedT=array
//   });
//   const { id } = params;

//   const { bus } = await FindSingleAvailableBusByDateByIdAction(id);
//   const { tickets } = await FindTicketsByBusIdAction(id);
//   console.log("selectedT ", selectedT);

//   return (
//     <section className="BusAndTicketSection md:flex flex-nowrap justify-between space-y-8 items-center pb-5">
//       <div className="busWraper space-y-4">
//         <div className="flex ">
//           <h3>Selected Tickets</h3>
//         </div>
//         <div className="space-y-4">
//           <h1 className="text-green-2">{bus.availavleBusID.busName}</h1>
//           <div className="flex space-x-2">
//             <h3>{bus.from}</h3>
//             <p className="text-green-2"> to </p>
//             <h3>{bus.destination}</h3>
//           </div>
//           <div className="flex space-x-2 items-baseline flex-nowrap">
//             <h3 className="text-green-2">Journey Will start at </h3>
//             <p> {bus.availavleBusID.time}</p>
//             <p className="text-green-2">of</p> <p>{bus.date}</p>
//           </div>
//           <div className="flex gap-x-2 items-baseline">
//             Per seat cost{" "}
//             <h2 className="text-green-2">
//               {bus.availavleBusID.perSeatCoast} ৳
//             </h2>{" "}
//             only
//           </div>
//         </div>
//       </div>

//       <div className="ticketWraper bg-green-1 w-[70%] max-w-[300px] h-[100%] ">
//         <Tickets tickets={tickets} slectedTickets={()=>slectedTicketsArray} />
//       </div>
//     </section>
//   );
// }

// export default BusPage;
