import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [bookings, setBookings] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("Bridal");
  const [uploadMessage, setUploadMessage] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      navigate("/admin-login");
    } else {
      fetchBookings();
      fetchPhotos();
    }
  }, []);

  // 📥 Fetch Bookings
  const fetchBookings = async () => {
    const res = await fetch("http://localhost:5000/api/bookings", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setBookings(data);
  };

  // 📥 Fetch Photos
  const fetchPhotos = async () => {
    const res = await fetch("http://localhost:5000/api/photos");
    const data = await res.json();
    setPhotos(data);
  };

  // 📸 Upload Photo
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Select an image first");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("category", category);

    const res = await fetch("http://localhost:5000/api/photos", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      setUploadMessage("✨ Photo uploaded successfully!");
      setImage(null);
      fetchPhotos();
    } else {
      setUploadMessage("Upload failed.");
    }
  };

  // 🗑 Delete Photo
  const deletePhoto = async (id) => {
    await fetch(`http://localhost:5000/api/photos/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchPhotos();
  };

  // 🚪 Logout
  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl text-[#d4af37]">Admin Dashboard</h1>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* 📸 Upload Section */}
      <div className="bg-[#1a1a25] p-6 rounded-xl mb-12 border border-[#d4af37]/20">
        <h2 className="text-xl mb-4 text-[#d4af37]">Upload Mehndi Photo</h2>

        <form onSubmit={handleUpload} className="space-y-4">

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="block w-full"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 bg-black border border-gray-700 rounded-lg"
          >
            <option value="Bridal">Bridal</option>
            <option value="Arabic">Arabic</option>
            <option value="Festival">Festival</option>
            <option value="Custom">Custom</option>
          </select>

          <button
            type="submit"
            className="px-6 py-2 bg-[#d4af37] text-black rounded-lg hover:opacity-90"
          >
            Upload Photo
          </button>

        </form>

        {uploadMessage && (
          <p className="mt-3 text-green-400">{uploadMessage}</p>
        )}
      </div>

      {/* 🖼 Uploaded Photos */}
      <div className="mb-12">
        <h2 className="text-2xl text-[#d4af37] mb-6">Uploaded Photos</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo._id}
              className="bg-[#1a1a25] p-3 rounded-xl border border-[#d4af37]/20"
            >
              <img
                src={photo.imageUrl}
                alt=""
                className="w-full h-60 object-cover rounded-lg mb-3"
              />
              <p className="text-sm text-gray-400 mb-3">
                Category: {photo.category}
              </p>

              <button
                onClick={() => deletePhoto(photo._id)}
                className="w-full py-1 bg-red-600 hover:bg-red-700 rounded-lg"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 📋 Bookings Section */}
      <div>
        <h2 className="text-2xl text-[#d4af37] mb-6">Bookings</h2>

        <div className="space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-[#1a1a25] p-6 rounded-xl border border-[#d4af37]/20"
            >
              <p><strong>Name:</strong> {booking.name}</p>
              <p><strong>Phone:</strong> {booking.phone}</p>
              <p><strong>Event:</strong> {booking.eventType}</p>
              <p><strong>Status:</strong> {booking.status}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Admin;
