"use server";


async function FindAvailableBusByDateAction() {
    try {
        const res = await fetch("http://localhost:3000/api/availableBusByDate", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("failed to fetch data");
        }

        return await res.json();
      } catch (err) {
        console.log("error loading topics: ", err);
      }
}
export default FindAvailableBusByDateAction;