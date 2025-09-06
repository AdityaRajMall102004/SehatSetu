import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  LogOut,
  Settings,
  FileText,
  Video,
  LayoutDashboard,
  MessageSquare,
  Bell,
  ChevronDown,
  Pill,
  PlusCircle,
  Calendar,
  Hospital,
  ActivitySquare,
} from "lucide-react";

// Using the same background for thematic consistency
const backgroundImageUrl = "https://images.unsplash.com/photo-1554469384-e58fac166873?q=80&w=2670&auto=format&fit=crop";

// Custom hook to detect clicks outside a component (for the user menu)
const useOutsideAlerter = (ref, callback) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

// Main Dashboard Component
export default function PatientDashboard() {
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef(null);
  const [today, setToday] = useState("");
  const [time, setTime] = useState("");
  const [dayName, setDayName] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
        const now = new Date();
        const dateOptions = { day: "2-digit", month: "short", year: "numeric" };
        setToday(now.toLocaleDateString("en-GB", dateOptions));
        const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
        setTime(now.toLocaleTimeString("en-US", timeOptions));
        const weekdayOptions = { weekday: "long" };
        setDayName(now.toLocaleDateString("en-US", weekdayOptions));
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  useOutsideAlerter(userMenuRef, () => setShowUserMenu(false));

  const userData = {
    name: "Aditya Raj Mall",
    email: "aditya@example.com",
    avatar: "https://i.pravatar.cc/150?u=aditya",
  };

  const handleLogout = () => {
    navigate("/");
  };

  const sidebarNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Calendar, label: "Appointments" },
    { icon: FileText, label: "Health Records" },
    { icon: MessageSquare, label: "Messages" },
    { icon: Settings, label: "Settings" },
  ];
  
  const ActionCard = ({ icon: Icon, title, description, accentColor, onClick }) => (
    <button
      onClick={onClick}
      className={`bg-slate-800/50 backdrop-blur-lg p-6 rounded-2xl border border-white/10 text-left w-full group
                 transform transition-all duration-300 hover:-translate-y-2 hover:border-${accentColor}-400/50 hover:shadow-2xl hover:shadow-${accentColor}-500/10`}
    >
      <div className={`p-3 rounded-full bg-gradient-to-br from-${accentColor}-500/20 to-slate-800/10 w-fit mb-4`}>
        <Icon className={`h-8 w-8 text-${accentColor}-400`} strokeWidth={1.5}/>
      </div>
      <h3 className="font-bold text-lg text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </button>
  );

  const handleJoinVideoCall = () => {
    const roomId = `consult_${Date.now()}`;
    navigate(`/VideoCall?room=${roomId}`);
  };

  return (
    <div className="flex min-h-screen bg-slate-900 font-sans text-gray-200">
      {/* ===== Sidebar ===== */}
      <aside className="w-64 bg-slate-900 flex flex-col fixed h-full border-r border-slate-700/60 z-30">
        <div className="p-6 text-center border-b border-slate-700/60">
          <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            SehatSetu
          </h1>
        </div>
        <nav className="flex-grow p-4">
          <ul>
            {sidebarNavItems.map((item) => (
              <li key={item.label} className="mb-2">
                <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    item.active
                      ? "bg-cyan-500/10 text-cyan-300 font-semibold border-l-2 border-cyan-400"
                      : "text-gray-400 hover:bg-slate-700/50 hover:text-white"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-slate-700/60">
          <button onClick={handleLogout} className="flex items-center gap-3 w-full text-left px-4 py-3 text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-semibold">Logout</span>
          </button>
        </div>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="flex-1 ml-64 relative">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgroundImageUrl})` }} />
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm z-10" />
        
        <div className="relative z-20 p-8">
          {/* ----- Header ----- */}
          <header className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white">
                Good morning, {userData.name.split(" ")[0]}!
              </h2>
              <p className="text-gray-400">
                Here is your health summary for today.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <button className="relative text-gray-400 hover:text-white transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-rose-500 rounded-full animate-pulse"></span>
              </button>
              <div className="relative" ref={userMenuRef}>
                <button onClick={() => setShowUserMenu(!showUserMenu)} className="flex items-center gap-2 group">
                  <img src={userData.avatar} alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-slate-600 group-hover:border-cyan-400 transition-all"/>
                  <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-3 w-72 bg-slate-800/90 backdrop-blur-lg rounded-xl shadow-2xl border border-slate-700 z-50 animate-fade-in-down">
                    <div className="p-4 border-b border-slate-700 flex items-center gap-4">
                      <img src={userData.avatar} alt="User Avatar" className="w-12 h-12 rounded-full" />
                      <div>
                        <p className="font-semibold text-white">{userData.name}</p>
                        <p className="text-sm text-gray-400">{userData.email}</p>
                      </div>
                    </div>
                    <div className="py-2">
                      <a href="#" className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-700/50 text-gray-300 transition-colors"><User className="w-5 h-5 text-cyan-400" /> My Profile</a>
                      <a href="#" className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-700/50 text-gray-300 transition-colors"><Hospital className="w-5 h-5 text-emerald-400" /> My Doctors</a>
                      <a href="#" className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-700/50 text-gray-300 transition-colors"><Settings className="w-5 h-5 text-gray-500" /> Settings</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* ----- Main Grid ----- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-8 rounded-2xl shadow-2xl shadow-cyan-500/20">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cyan-200">Upcoming Appointment</p>
                    <h3 className="text-3xl font-bold mt-1">Dr. Anjali Sharma</h3>
                    <p className="text-cyan-100">Cardiologist</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">{time}</p>
                    <p className="text-cyan-200">{dayName}, {today}</p>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <button onClick={handleJoinVideoCall} className="flex items-center gap-2 py-2.5 px-6 rounded-full font-bold text-cyan-900 bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <Video className="w-5 h-5" /> Join Video Call
                  </button>
                  <button className="border border-cyan-300/50 font-semibold px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors">
                    Reschedule
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ActionCard icon={PlusCircle} title="Book Appointment" description="Schedule a visit or video call." accentColor="violet" onClick={() => navigate("/book-appointment")} />
                <ActionCard icon={FileText} title="View Health Records" description="Access test results and history." accentColor="rose" onClick={() => navigate("/health-records")} />
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 space-y-6">
              <h3 className="font-bold text-xl text-white border-b border-slate-700 pb-4">
                My Prescriptions
              </h3>
              <div className="flex items-center gap-4">
                <div className="bg-rose-500/10 p-3 rounded-full"><Pill className="h-6 w-6 text-rose-400" /></div>
                <div>
                  <p className="font-semibold text-gray-200">Metformin</p>
                  <p className="text-sm text-gray-400">2 pills, after breakfast</p>
                </div>
                <a href="#" className="ml-auto text-sm text-cyan-400 hover:underline">Details</a>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/10 p-3 rounded-full"><Pill className="h-6 w-6 text-blue-400" /></div>
                <div>
                  <p className="font-semibold text-gray-200">Amlodipine</p>
                  <p className="text-sm text-gray-400">1 pill, after dinner</p>
                </div>
                <a href="#" className="ml-auto text-sm text-cyan-400 hover:underline">Details</a>
              </div>
              <button className="w-full mt-4 bg-slate-700/50 text-cyan-300 font-semibold py-2.5 rounded-lg hover:bg-slate-700 transition-colors">
                View All
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}