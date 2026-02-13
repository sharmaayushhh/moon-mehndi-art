import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MoonHero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center h-[100vh] overflow-hidden bg-[#0f0f18] text-white">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      >
        <source src="/mehndi-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.18),_transparent_70%)]"></div>

      {/* Animated Moon Glow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="w-80 h-80 rounded-full bg-[#d4af37] opacity-20 absolute shadow-[0_0_150px_#d4af37]"
      />

      {/* Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute w-96 h-96 rounded-full border border-[#d4af37]/20"
      />

      {/* Heading */}
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold tracking-wide relative z-10"
      >
        Moon Mehndi Art
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-6 text-gray-300 max-w-2xl relative z-10 leading-relaxed text-lg"
      >
        Intricate Designs. Timeless Traditions.
        <br />
        Let your hands tell a beautiful story under the moonlight.
      </motion.p>

      {/* 📍 Address Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-6 relative z-10 text-[#d4af37] text-sm md:text-base tracking-wide"
      >
        📍 Serving Bhilai • Durg • Raipur
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="relative z-10 mt-8 flex gap-4"
      >
        <Link
          to="/booking"
          className="px-8 py-3 bg-[#d4af37] text-black rounded-full hover:scale-105 transition duration-300 font-semibold"
        >
          Book Appointment
        </Link>

        <Link
          to="/gallery"
          className="px-8 py-3 border border-[#d4af37] text-[#d4af37] rounded-full hover:bg-[#d4af37] hover:text-black transition duration-300"
        >
          View Designs
        </Link>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 text-[#d4af37] animate-bounce z-10 text-xl">
        ↓
      </div>

    </section>
  );
}

export default MoonHero;
