import mongoose, { Schema } from "mongoose";
import React from "react";

const busSchema = new Schema({
  busName: {
    type: String,
    required:true,
  },
  firstPlace: {
    type: String,
    required: true,
  },
  secondPlace: {
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
  firstTime:{
    type:String,
  },
  secondTime:{
    type:String,
  },
  joinedDate:{
    type:Date,
    default:Date.now,
},
});

export const bus = mongoose.models.bus || mongoose.model("bus", busSchema);
