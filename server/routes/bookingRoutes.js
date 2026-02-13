import express from "express";
import Booking from "../models/Booking.js";
import verifyAdmin from "../middleware/verifyAdmin.js";

const router = express.Router();


// ===============================
// Create booking (Public)
// ===============================
router.post("/", async (req, res) => {
  try {
    const { name, phone, eventType, date, details } = req.body;

    if (!name || !phone || !eventType || !date) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    const booking = await Booking.create({
      name,
      phone,
      eventType,
      date,
      details,
      status: "Pending"
    });

    res.status(201).json({
      message: "Booking created successfully",
      booking
    });

  } catch (error) {
    console.error("Create booking error:", error);
    res.status(500).json({ message: "Error creating booking" });
  }
});


// ===============================
// Get all bookings (Admin Only)
// ===============================
router.get("/", verifyAdmin, async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    console.error("Fetch bookings error:", error);
    res.status(500).json({ message: "Error fetching bookings" });
  }
});


// ===============================
// Update booking status (Admin Only)
// ===============================
router.put("/:id", verifyAdmin, async (req, res) => {
  try {
    const { status } = req.body;

    if (!["Pending", "Confirmed", "Cancelled"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({
      message: "Booking status updated",
      booking: updatedBooking
    });

  } catch (error) {
    console.error("Update booking error:", error);
    res.status(500).json({ message: "Error updating status" });
  }
});

export default router;
