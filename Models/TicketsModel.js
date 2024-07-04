const { Schema, default: mongoose } = require("mongoose");

const TicketsSchema = new Schema({
  ticketNumber: {
    type: Number,
    required: true,
  },
  ticketState: {
    type: String,
    enum:["available","booked"],
    default: "available",
  },
  busID: {
    type: mongoose.Types.ObjectId,
    ref: "AvailableBusByDate",
  },
});
export const Tickets =
  mongoose.models.Tickets || mongoose.model("Tickets", TicketsSchema);
