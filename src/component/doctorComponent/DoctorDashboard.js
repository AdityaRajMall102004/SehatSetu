import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Calendar, Video, FileText, Check, X, MessageSquare, LogOut, CheckCircle, PlusCircle, Power } from 'lucide-react';

// Using the same background for thematic consistency
const backgroundImageUrl = "https://images.unsplash.com/photo-1554469384-e58fac166873?q=80&w=2670&auto-format&fit=crop";

// Custom hook to detect clicks outside a component
const useOutsideAlerter = (ref, callback) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
};


export default function DoctorDashboard() {
  const navigate = useNavigate();
  const [availability, setAvailability] = useState(false);
  const [showForm, setShowForm] = useState(false); // Placeholder for AppointmentForm
  const [showReports, setShowReports] = useState(false); // Placeholder for ReportForm
  const [showProfile, setShowProfile] = useState(false);
  const [viewPatient, setViewPatient] = useState(null);
  const [viewReport, setViewReport] = useState(null);
  const [showMessages, setShowMessages] = useState(false);

  const profileMenuRef = useRef(null);
  useOutsideAlerter(profileMenuRef, () => setShowProfile(false));
  const messagesMenuRef = useRef(null);
  useOutsideAlerter(messagesMenuRef, () => setShowMessages(false));

  const [messages] = useState([
    { id: 1, sender: "Aditya RajMall", text: "Can you meet tomorrow at 11 AM?" },
    { id: 2, sender: "Priya Singh", text: "Thank you for the consultation." },
  ]);

  const [doctorData, setDoctorData] = useState({
    name: "Dr. Sharma",
    specialization: "General Medicine",
    email: "dr.sharma@example.com",
    phone: "+91 98765 43210",
    photo: "https://i.pravatar.cc/150?u=drsharma",
    todayAppointments: [
      { patient: "Aditya Raj Mall", time: "10:00 AM", status: "pending" },
      { patient: "Priya Singh", time: "11:30 AM", status: "pending" },
    ],
    patients: [
      { name: "Aditya Raj Mall", age: 21, gender: "Male", phone: "9876543210", mode: "Online", disease: "Fever & Cough", lastVisit: "2025-08-15" },
      { name: "Priya Singh", age: 25, gender: "Female", phone: "9876501234", mode: "In-Person", disease: "Routine Checkup", lastVisit: "2025-08-20" },
    ],
    reports: [
      { patient: "Aditya Raj Mall", report: "Blood Test: All parameters are within the normal range." },
      { patient: "Priya Singh", report: "Chest X-Ray: No abnormalities detected." },
    ],
  });

  const handleLogout = () => { setAvailability(false); navigate("/"); };
  const handleAddAppointment = (newAppointment) => { /* Logic to add appointment */ setShowForm(false); };
  const handleCancelAppointment = (index) => { /* Logic to cancel */ };
  const handleAcceptAppointment = (index) => { /* Logic to accept */ };

  // --- Styled Modal Component ---
  const Modal = ({ children, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div ref={profileMenuRef} className="relative bg-slate-800/80 backdrop-blur-xl w-full max-w-md rounded-2xl shadow-2xl border border-white/10 p-6">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition">
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
   const handleJoinVideoCall = () => {
    const roomId = `consult_${Date.now()}`;
    navigate(`/VideoCall?room=${roomId}`);
  };

  return (
    <main className="relative min-h-screen w-full bg-slate-900 font-sans text-gray-200">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgroundImageUrl})` }} />
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm z-10" />
      
      <div className="relative z-20 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* --- Header --- */}
        <header className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Hello, <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">{doctorData.name}</span></h1>
            <p className="text-gray-400">Welcome to your command center.</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setAvailability(!availability)}
              className={`flex items-center gap-2 py-2.5 px-5 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 ${
                availability
                  ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg shadow-emerald-500/30"
                  : "bg-slate-700/50 text-gray-300 hover:bg-slate-700"
              }`}
            >
              <Power size={18} /> {availability ? "Available" : "Go Available"}
            </button>
            <div ref={messagesMenuRef} className="relative">
              <button onClick={() => setShowMessages(!showMessages)} className="relative p-3 rounded-full bg-slate-700/50 hover:bg-slate-700 transition">
                <MessageSquare className="text-cyan-400" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-rose-500 rounded-full border-2 border-slate-900 animate-pulse"></span>
              </button>
              {showMessages && (
                 <div className="absolute right-0 mt-3 w-72 bg-slate-800/90 backdrop-blur-lg rounded-xl shadow-2xl border border-slate-700 z-50 animate-fade-in-down p-4">
                  <h3 className="font-bold text-white mb-2">Recent Messages</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
                    {messages.map((m) => (
                      <div key={m.id} className="p-2 bg-slate-900/50 rounded"><div className="font-semibold text-sm text-cyan-400">{m.sender}</div><div className="text-gray-300 text-sm">{m.text}</div></div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div ref={profileMenuRef} className="relative">
              <button onClick={() => setShowProfile(!showProfile)}><img src={doctorData.photo} alt="Doctor" className="w-12 h-12 rounded-full border-2 border-slate-600 hover:border-cyan-400 transition" /></button>
              {showProfile && (
                <div className="absolute right-0 mt-3 w-64 bg-slate-800/90 backdrop-blur-lg rounded-xl shadow-2xl border border-slate-700 z-50 animate-fade-in-down p-4">
                  <p className="font-bold text-white">{doctorData.name}</p>
                  <p className="text-gray-400 text-sm">{doctorData.specialization}</p>
                  <div className="my-3 h-px bg-slate-700"></div>
                  <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 py-2 rounded-lg font-semibold bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition">
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* --- Main Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4"><Users className="text-violet-400" /> Patient Visits</h2>
              <div className="space-y-3 max-h-64 overflow-y-auto custom-scrollbar pr-2">
                {doctorData.patients.map((p, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 bg-slate-900/40 rounded-lg">
                    <div className="flex-grow"><p className="font-semibold text-white">{p.name}</p><p className="text-gray-400 text-sm">Last Visit: {p.lastVisit}</p></div>
                    <button onClick={() => setViewPatient(p)} className="py-1 px-4 rounded-md font-semibold border border-slate-600 text-gray-300 hover:bg-slate-700 transition">View</button>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4"><Calendar className="text-sky-400" /> Today's Appointments</h2>
              {doctorData.todayAppointments.length > 0 ? (
                <div className="space-y-3">
                  {doctorData.todayAppointments.map((a, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-slate-900/40 rounded-lg">
                      <p className="font-semibold text-white flex-grow">{a.patient}</p>
                      <button onClick={() => handleAcceptAppointment(idx)} className="p-2 rounded-full bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/40 transition"><Check size={16}/></button>
                      <button onClick={() => handleCancelAppointment(idx)} className="p-2 rounded-full bg-rose-500/20 text-rose-400 hover:bg-rose-500/40 transition"><X size={16}/></button>
                    </div>
                  ))}
                </div>
              ) : <p className="text-gray-400 text-center py-4">No appointments scheduled for today.</p>}
              <button onClick={() => setShowForm(true)} className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold text-white transition-all bg-slate-700/50 hover:bg-slate-700">
                <PlusCircle size={18} /> Add Appointment
              </button>
            </div>
          </div>
          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <div className="bg-gradient-to-br from-rose-500 to-red-600 rounded-2xl shadow-2xl shadow-rose-500/20 p-6 text-white">
              <h2 className="flex items-center gap-2 text-xl font-bold mb-2"><Video /> Video Call</h2>
              <p className="text-rose-100 mb-4">Your virtual consultation room is ready. Join now to start your next call.</p>
              <button onClick={handleJoinVideoCall} className="py-2.5 px-6 rounded-full font-bold bg-white text-rose-600 transition transform hover:scale-105">Join Video Call</button>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4"><FileText className="text-emerald-400" /> Patient Reports</h2>
              <div className="space-y-3 max-h-64 overflow-y-auto custom-scrollbar pr-2">
                {doctorData.reports.map((r, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 bg-slate-900/40 rounded-lg">
                    <div className="flex-grow"><p className="font-semibold text-white">{r.patient}</p></div>
                    <button onClick={() => setViewReport(r)} className="py-1 px-4 rounded-md font-semibold border border-slate-600 text-gray-300 hover:bg-slate-700 transition">View</button>
                  </div>
                ))}
              </div>
              <button onClick={() => setShowReports(true)} className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold text-white transition-all bg-slate-700/50 hover:bg-slate-700">
                <PlusCircle size={18} /> Add Report
              </button>
            </div>
          </div>
        </div>

        {/* --- Modals --- */}
        {viewPatient && (
          <Modal onClose={() => setViewPatient(null)}>
            <h3 className="text-2xl font-bold mb-4 text-white">{viewPatient.name}</h3>
            <div className="space-y-2 text-gray-300">
              <p><strong className="text-violet-400">Gender:</strong> {viewPatient.gender}</p>
              <p><strong className="text-violet-400">Age:</strong> {viewPatient.age}</p>
              <p><strong className="text-violet-400">Contact:</strong> {viewPatient.phone}</p>
              <p><strong className="text-violet-400">Mode:</strong> {viewPatient.mode}</p>
              <p><strong className="text-violet-400">Condition:</strong> {viewPatient.disease}</p>
            </div>
          </Modal>
        )}
        {viewReport && (
          <Modal onClose={() => setViewReport(null)}>
            <h3 className="text-2xl font-bold mb-4 text-white">Report: <span className="text-emerald-400">{viewReport.patient}</span></h3>
            <p className="text-gray-300 bg-slate-900/50 p-4 rounded-lg">{viewReport.report}</p>
          </Modal>
        )}
      </div>
    </main>
  );
}