import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function HomeSlideshow() {
  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchPhotos();
  }, []);

  useEffect(() => {
    if (photos.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === photos.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [photos]);

  const fetchPhotos = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/photos");
      const data = await res.json();

      // You can filter category if you want
      setPhotos(data.slice(0, 5));
    } catch (err) {
      console.log(err);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === photos.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? photos.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-24 bg-[#0f0f18] relative overflow-hidden">

      {/* Soft Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.08),_transparent_70%)]"></div>

      <h2 className="text-4xl md:text-5xl text-center text-[#d4af37] font-semibold mb-16 relative z-10">
        Our Featured Creations
      </h2>

      <div className="max-w-5xl mx-auto relative z-10">

        <div className="relative h-[450px] rounded-3xl overflow-hidden">

          <AnimatePresence mode="wait">
            {photos.length > 0 && (
              <motion.img
                key={photos[currentIndex]._id}
                src={photos[currentIndex].imageUrl}
                alt="mehndi"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover"
              />
            )}
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#d4af37] hover:text-black text-white px-4 py-2 rounded-full transition"
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#d4af37] hover:text-black text-white px-4 py-2 rounded-full transition"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {photos.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                currentIndex === index
                  ? "bg-[#d4af37]"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default HomeSlideshow;
