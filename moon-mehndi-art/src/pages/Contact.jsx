import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccessMessage("✨ Your message has been sent successfully!");
      setFormData({
        name: "",
        phone: "",
        eventType: "",
        message: "",
      });
    }
  };

  return (
    <section className="min-h-screen bg-[#0f0f18] text-white py-24 px-6 relative overflow-hidden">

      {/* Soft Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.08),_transparent_70%)]"></div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl text-center text-[#d4af37] font-semibold mb-16 relative z-10"
      >
        Get In Touch
      </motion.h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl text-[#d4af37] mb-6">Contact Information</h2>

          <p className="text-gray-400 mb-6">
            Have questions or want to book your special day?  
            Let’s create something beautiful together.
          </p>

          <div className="space-y-4 text-gray-300">
            <p><strong>📞 Phone:</strong> +91 98765 43210</p>
            <p><strong>📧 Email:</strong> moonmehndiart@gmail.com</p>
            <p><strong>📍 Location:</strong> Bhilai • Raipur • Durg</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1a1a25] p-8 rounded-2xl border border-[#d4af37]/20">

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-[#d4af37] outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-[#d4af37] outline-none"
            />

            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
              className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-[#d4af37] outline-none"
            >
              <option value="">Select Event Type</option>
              <option value="Bridal">Bridal</option>
              <option value="Festival">Festival</option>
              <option value="Engagement">Engagement</option>
              <option value="Custom">Custom</option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:border-[#d4af37] outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-[#d4af37] text-black font-semibold rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>

            {successMessage && (
              <p className="text-green-400 text-center">
                {successMessage}
              </p>
            )}

          </form>
        </div>

      </div>

    </section>
  );
}

export default Contact;
