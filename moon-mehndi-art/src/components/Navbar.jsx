import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <Link to="/" className="text-2xl font-semibold text-[#d4af37]">
        Moon Mehndi Art
      </Link>

      <div className="space-x-8 hidden md:flex">
        <Link to="/" className="hover:text-[#d4af37] transition">Home</Link>
        <Link to="/gallery" className="hover:text-[#d4af37] transition">Gallery</Link>
        <Link to="/booking" className="hover:text-[#d4af37] transition">Book</Link>
      </div>
    </nav>
  );
}

export default Navbar;
