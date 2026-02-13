import { useEffect, useState } from "react";

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/photos")
      .then(res => res.json())
      .then(data => setPhotos(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f18] text-white py-20 px-6">

      <h1 className="text-4xl text-center text-[#d4af37] mb-12">
        Our Mehndi Gallery
      </h1>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map(photo => (
          <div
            key={photo._id}
            className="overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => setSelectedImage(photo.imageUrl)}
          >
            <img
              src={photo.imageUrl}
              alt=""
              className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt=""
            className="max-h-[90%] max-w-[90%] rounded-xl"
          />
        </div>
      )}

    </div>
  );
}

export default Gallery;
