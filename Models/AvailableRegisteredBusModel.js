const { Schema, default: mongoose } = require("mongoose");

const AvailableRegisteredBusSchema = new Schema({
  busName: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  totalBusSeat: {
    type: Number,
    required: true,
  },
  perSeatCoast: {
    type: String,
    required: true,
  },
  time: { type: String, required: true },
  busId: {
    type: mongoose.Types.ObjectId,
    ref: "bus",
    required: true,
  },
});

export const AvailableRegisteredBus =
  mongoose.models.AvailableRegisteredBus ||
  mongoose.model("AvailableRegisteredBus", AvailableRegisteredBusSchema);
// export const bus = mongoose.models.bus || mongoose.model("bus", busSchema);
