import { Link } from "react-router-dom";
import { Stethoscope, Languages } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-teal-600 to-blue-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 text-white font-bold text-xl hover:scale-105 transition"
        >
          <Stethoscope className="w-7 h-7 text-white" />
          <span>SehatSetu</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-white font-medium">
          <Link to="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-200 transition">
            About
          </Link>
          <Link to="/services" className="hover:text-gray-200 transition">
            Services
          </Link>
          <Link to="/contact" className="hover:text-gray-200 transition">
            Contact
          </Link>
        </nav>
        {/* Right side: Language + Buttons */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <button className="flex items-center gap-1 text-white bg-teal-700 px-3 py-1 rounded-lg hover:bg-teal-800 transition">
            <Languages className="w-4 h-4" />
            <span className="hidden sm:inline">Language</span>
            <div id="google_translate_element" className="text-sm text-white leading-none" ></div>
          </button>
        </div>
      </div>
    </header>
  );
}
