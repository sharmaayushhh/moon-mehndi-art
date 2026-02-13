import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  eventType: String,
  date: String,
  details: String,
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);
