"use server";


async function FindAvailableBusByDateAction() {
    try {
        const availableBuses = await fetch("http://localhost:3000/api/availableBusByDate", {
          cache: "no-store",
        });
        if (!availableBuses.ok) {
          throw new Error("failed to fetch data");
        }

        return await availableBuses.json();
      } catch (err) {
        console.log("error loading topics: ", err);
      }
}
export default FindAvailableBusByDateAction;