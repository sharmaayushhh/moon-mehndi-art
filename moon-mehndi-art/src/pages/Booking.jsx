import { useState } from "react";
import { motion } from "framer-motion";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    date: "",
    details: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    // Basic Validation
    if (!formData.name.trim() ||
        !formData.phone.trim() ||
        !formData.eventType ||
        !formData.date) {
      setError("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save booking");
      }

      setSuccess("✨ Booking Submitted Successfully! Status: Pending");

      setFormData({
        name: "",
        phone: "",
        eventType: "",
        date: "",
        details: "",
      });

    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#0f0f18] flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-[#1a1a25] p-10 rounded-2xl shadow-xl border border-[#d4af37]/20"
      >
        <h2 className="text-4xl font-semibold text-center text-[#d4af37] mb-10">
          Book Your Appointment
        </h2>

        {success && (
          <div className="bg-green-900/40 border border-green-500 text-green-400 text-center py-3 rounded-lg mb-6">
            {success}
          </div>
        )}

        {error && (
          <div className="bg-red-900/40 border border-red-500 text-red-400 text-center py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 bg-[#0f0f18] border border-gray-700 rounded-lg focus:outline-none focus:border-[#d4af37]"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 bg-[#0f0f18] border border-gray-700 rounded-lg focus:outline-none focus:border-[#d4af37]"
          />

          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full p-4 bg-[#0f0f18] border border-gray-700 rounded-lg focus:outline-none focus:border-[#d4af37]"
          >
            <option value="">Select Event Type *</option>
            <option value="Bridal Mehndi">Bridal Mehndi</option>
            <option value="Engagement">Engagement</option>
            <option value="Party / Festival">Party / Festival</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-4 bg-[#0f0f18] border border-gray-700 rounded-lg focus:outline-none focus:border-[#d4af37]"
          />

          <textarea
            rows="4"
            name="details"
            placeholder="Additional Details"
            value={formData.details}
            onChange={handleChange}
            className="w-full p-4 bg-[#0f0f18] border border-gray-700 rounded-lg focus:outline-none focus:border-[#d4af37]"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#d4af37] text-black font-semibold rounded-lg mt-4 disabled:opacity-60"
          >
            {loading ? "Processing..." : "Confirm Booking"}
          </motion.button>

        </form>
      </motion.div>
    </section>
  );
}

export default Booking;