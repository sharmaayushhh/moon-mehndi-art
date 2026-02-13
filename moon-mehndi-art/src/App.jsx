import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import MoonFooter from "./components/MoonFooter";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();

  return (
    <div className="bg-[#0f0f18] text-white min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
<Route path="/contact" element={<Contact />} />

        </Routes>
      </AnimatePresence>
      <MoonFooter />
    </div>
  );
}

export default App;
