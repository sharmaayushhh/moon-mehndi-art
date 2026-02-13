import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function MoonFooter() {
  return (
    <footer className="bg-[#0f0f18] text-gray-300 pt-16 pb-8 border-t border-[#d4af37]/20">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#d4af37]">Moon Mehndi Art</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Creating elegant and intricate mehndi designs that tell your story.
            Bridal • Festival • Custom Designs
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#d4af37] font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#d4af37] transition">Home</Link></li>
            <li><Link to="/gallery" className="hover:text-[#d4af37] transition">Gallery</Link></li>
            <li><Link to="/booking" className="hover:text-[#d4af37] transition">Book Appointment</Link></li>
            <li><Link to="/contact" className="hover:text-[#d4af37] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-[#d4af37] font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#d4af37]" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#d4af37]" />
              moonmehndiart@gmail.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-[#d4af37] font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <a
              href="https://instagram.com/moon.mehandiart"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-[#d4af37]/40 rounded-full hover:bg-[#d4af37] hover:text-black transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61587043891154"
              className="w-10 h-10 flex items-center justify-center border border-[#d4af37]/40 rounded-full hover:bg-[#d4af37] hover:text-black transition duration-300"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-12 border-t border-[#d4af37]/10 pt-6">
        © {new Date().getFullYear()} Moon Mehndi Art. All Rights Reserved. <br />
        Developed by <span className="text-[#d4af37] font-semibold">Webydia</span>
      </div>

    </footer>
  );
}

export default MoonFooter;
