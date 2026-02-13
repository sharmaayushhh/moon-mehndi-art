import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function FeaturedGallery() {

  const images = [
    "https://images.news9live.com/wp-content/uploads/2023/08/125-Front-Hand-Mehndi-Design-Ideas-To-Fall-In-Love-With.jpg",
    "https://i.pinimg.com/736x/99/96/e6/9996e63b9ea8abe2406a2cc369c76806.jpg",
    "https://i.pinimg.com/736x/aa/2d/0c/aa2d0cf83d8ae7635ce5dbf8d9a14652.jpg"
  ];

  return (
    <section className="py-20 px-6 bg-[#0f0f18]">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl text-center font-semibold text-[#d4af37]"
      >
        Signature Bridal Designs
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl group cursor-pointer"
          >
            <img
              src={img}
              alt="mehndi"
              className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="absolute inset-0 border border-[#d4af37]/40 opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl"></div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          to="/gallery"
          className="px-8 py-3 border border-[#d4af37] text-[#d4af37] rounded-full hover:bg-[#d4af37] hover:text-black transition"
        >
          View Full Gallery
        </Link>
      </div>

    </section>
  );
}

export default FeaturedGallery;
