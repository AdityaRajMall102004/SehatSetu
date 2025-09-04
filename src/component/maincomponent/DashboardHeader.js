import { Link, useNavigate, useLocation} from "react-router-dom";
import { Stethoscope, Languages, LogOut } from "lucide-react";

export default function DashboardHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  let role = "";
  if (location.pathname.includes("PatientDashboard")) role = "Patient";
  else if (location.pathname.includes("DoctorDashboard")) role = "Doctor";
  else if (location.pathname.includes("AnganwadiDashboard")) role = "Anganwadi";

  const handleLogout = () => {
    navigate("/"); // redirect to home/login after logout
  };

  return (
    <header className="bg-gradient-to-r from-teal-600 to-blue-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left side: Logo + Greeting */}
        <div className="flex flex-col items-start text-white font-bold text-xl">
          <Link to="/" className="flex items-center gap-2 hover:scale-105 transition">
            {/* <Stethoscope className="w-7 h-7 text-white" />
           <span>SehatSetu</span>*/}
          </Link>
          <span className="text-sm font-medium text-gray-100 mt-1">
            {/*Hi, {role === "Doctor" ? "Dr." : "Mr./Mrs."} {name}*/}
            <h1 className="text-2xl font-bold">{role} Dashboard</h1>
          </span>
        </div>
        <div className="flex items-center gap-4">
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


        {/* Right side: Language + Logout */}
        
          {/* Language Selector */}
          <button className="flex items-center gap-1 text-white bg-teal-700 px-3 py-1 rounded-lg hover:bg-teal-800 transition">
            <Languages className="w-4 h-4" />
            <span className="hidden sm:inline">Language</span>
            <div id="google_translate_element" className="text-sm text-white leading-none"></div>
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 bg-white text-red-600 px-3 py-1 rounded-lg font-semibold hover:bg-red-50 transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
