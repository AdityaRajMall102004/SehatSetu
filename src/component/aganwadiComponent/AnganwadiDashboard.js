// import { useNavigate } from "react-router-dom";

// export default function AnganwadiDashboard() {
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen bg-green-50 font-sans p-6">
//       <header className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-6">
//         <h1 className="text-2xl font-bold text-green-700">Anganwadi Dashboard</h1>
//         <button
//           onClick={handleLogout}
//           className="bg-white border-2 border-green-600 text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-100 transition-all"
//         >
//           Logout
//         </button>
//       </header>

//       <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-bold text-green-700 mb-2">Registered Children</h2>
//           <p className="text-gray-700">View and manage all children registered under your Anganwadi center.</p>
//           <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
//             View List
//           </button>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-bold text-green-700 mb-2">Health Checkups</h2>
//           <p className="text-gray-700">Schedule and track routine health checkups and vaccinations.</p>
//           <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
//             Manage Checkups
//           </button>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-bold text-green-700 mb-2">Nutrition Program</h2>
//           <p className="text-gray-700">Monitor meals and nutrition plans provided at your center.</p>
//           <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
//             View Nutrition
//           </button>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-bold text-green-700 mb-2">Reports</h2>
//           <p className="text-gray-700">Generate reports for children, health, and nutrition activities.</p>
//           <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
//             Generate Report
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }


import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home, LogOut, MessageSquare, Users, CalendarPlus, BrainCircuit, Search, Package, FileText, PlusCircle, X, Pill } from 'lucide-react';
// Note: AppointmentForm would be a separate component, its modal wrapper is styled here.
// import AppointmentForm from "./AppointmentForm"; 

// --- Consistent Theming ---
const backgroundImageUrl = "https://images.unsplash.com/photo-1554469384-e58fac166873?q=80&w=2670&auto-format&fit=crop";

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

export default function AnganwadiDashboard() {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [showRegisteredList, setShowRegisteredList] = useState(false);
  const [showAddNutrient, setShowAddNutrient] = useState(false);
  const [viewReport, setViewReport] = useState(null);

  const profileMenuRef = useRef(null);
  useOutsideAlerter(profileMenuRef, () => setShowProfile(false));
  const messagesMenuRef = useRef(null);
  useOutsideAlerter(messagesMenuRef, () => setShowMessages(false));

  // --- Mock Data ---
  const [messages] = useState([
    { id: 1, sender: "Supervisor", text: "Meeting tomorrow at 11 AM" },
    { id: 2, sender: "Dr. Sharma", text: "Upload the new vaccination list" },
  ]);
  const [registered] = useState([
    { id: 1, name: "Asha", age: 2, vill: "Khera", sex: "F" }, { id: 2, name: "Raju", age: 3, vill: "Nabha", sex: "M" },
    { id: 3, name: "Meena", age: 1, vill: "Khera", sex: "F" }, { id: 4, name: "Vikram", age: 4, vill: "Kheri", sex: "M" },
    { id: 5, name: "Sunita", age: 2, vill: "Nabha", sex: "F" },
  ]);
  const [nutrients, setNutrients] = useState([
    { id: 1, name: "Iron Syrup", forAges: "6-12 months", qty: 20 },
    { id: 2, name: "Vitamin A", forAges: "1-3 years", qty: 15 },
  ]);
  const [newNutrient, setNewNutrient] = useState({ name: "", forAges: "", qty: "" });
  const [reports] = useState([
    { id: 1, patient: "Aditya Raj Mall", uploadedBy: "Dr. Sharma", note: "Blood test - Normal", date: "2025-08-25" },
    { id: 2, patient: "Priya Singh", uploadedBy: "Dr. Sharma", note: "X-Ray - No issue", date: "2025-08-20" },
  ]);
  const [symptom, setSymptom] = useState("");
  const [days, setDays] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [medicine, setMedicine] = useState("");
  const [pharmacies, setPharmacies] = useState([]);

  // --- Handlers ---
  const handleSymptomCheck = () => {
    if (!symptom || !days) {
      setDiagnosis("Please enter both symptom and duration.");
    } else {
      setDiagnosis(`For "${symptom}" lasting ${days} days, immediate consultation with a nearby doctor is advised for proper diagnosis.`);
    }
  };
  const handleSearchMedicine = () => {
    if (!medicine) { setPharmacies([]); return; }
    setPharmacies([
      { shop: "Health Plus Medicals", dist: "Nabha", time: "9 AM - 8 PM", area: "Main Bazar" },
      { shop: "City Pharmacy", dist: "Patiala", time: "10 AM - 9 PM", area: "Bus Stand Rd" },
    ]);
  };
  const handleAddNutrient = () => { /* Logic to add nutrient */ setShowAddNutrient(false); };
  const handleLogout = () => navigate("/");
  const handleAddAppointment = (appt) => { alert(`Appointment for ${appt.name} saved.`); setShowAppointmentForm(false); };
  
  const Card = ({ children, className }) => (
    <div className={`bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 ${className}`}>
      {children}
    </div>
  );
  
  const Modal = ({ children, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="relative bg-slate-800/80 backdrop-blur-xl w-full max-w-md rounded-2xl shadow-2xl border border-white/10 p-6">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition"><X size={24} /></button>
        {children}
      </div>
    </div>
  );

  return (
    <main className="relative min-h-screen w-full bg-slate-900 font-sans text-gray-200">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgroundImageUrl})` }} />
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm z-10" />
      
      <div className="relative z-20 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* --- Header --- */}
        <header className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Hello, <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-500">Smt. Kavita</span></h1>
            <p className="text-gray-400">Anganwadi Worker Dashboard</p>
          </div>
          <div className="flex items-center gap-4">
            <div ref={messagesMenuRef} className="relative">
              <button onClick={() => setShowMessages(s => !s)} className="relative p-3 rounded-full bg-slate-700/50 hover:bg-slate-700 transition"><MessageSquare className="text-violet-400" /><span className="absolute -top-1 -right-1 h-3 w-3 bg-rose-500 rounded-full border-2 border-slate-900 animate-pulse"></span></button>
              {showMessages && ( <div className="absolute right-0 mt-3 w-72 bg-slate-800/90 backdrop-blur-lg rounded-xl shadow-2xl border border-slate-700 z-50 p-4 animate-fade-in-down">...</div> )}
            </div>
            <div ref={profileMenuRef} className="relative">
              <button onClick={() => setShowProfile(s => !s)}><img src="https://i.pravatar.cc/150?u=kavita" alt="Worker" className="w-12 h-12 rounded-full border-2 border-slate-600 hover:border-violet-400 transition" /></button>
              {showProfile && ( <div className="absolute right-0 mt-3 w-72 bg-slate-800/90 backdrop-blur-lg rounded-xl shadow-2xl border border-slate-700 z-50 p-4 animate-fade-in-down">...</div> )}
            </div>
          </div>
        </header>

        {/* --- Main Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="space-y-6">
            <Card className="flex flex-col justify-between">
              <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-2"><Users className="text-violet-400" /> Total Registrations</h2>
              <div className="flex items-end justify-between gap-6">
                <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-violet-300">{registered.length}</div>
                <button onClick={() => setShowRegisteredList(true)} className="py-2 px-5 rounded-lg font-semibold border-2 border-slate-600 text-gray-300 hover:bg-slate-700 hover:border-slate-500 transition">View List</button>
              </div>
            </Card>
            <Card>
              <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-4"><CalendarPlus className="text-cyan-400" /> Appointments</h2>
              <button onClick={() => setShowAppointmentForm(true)} className="w-full py-3 rounded-xl font-bold text-white transition-all duration-300 transform bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:-translate-y-0.5">
                Book New Appointment
              </button>
            </Card>
          </div>

          {/* Column 2 (Main Tool) */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-4"><BrainCircuit className="text-violet-400" /> AI Symptom Checker</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                <input type="text" placeholder="Enter Symptom (e.g., Fever)" value={symptom} onChange={(e) => setSymptom(e.target.value)} className="sm:col-span-2 w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500" />
                <input type="number" placeholder="Days" value={days} onChange={(e) => setDays(e.target.value)} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500" />
              </div>
              <button onClick={handleSymptomCheck} className="w-full mt-4 py-3 rounded-xl font-bold text-white transition-all bg-slate-700 hover:bg-slate-600">Check Symptoms</button>
              {diagnosis && <p className="mt-4 text-center bg-slate-900/50 p-3 rounded-lg">{diagnosis}</p>}
            </Card>
            <Card>
                <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-4"><Search className="text-emerald-400" /> Pharmacy & Medicine Search</h2>
                <div className="flex gap-4">
                  <input type="text" placeholder="Search for a medicine..." value={medicine} onChange={(e) => setMedicine(e.target.value)} className="flex-grow w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  <button onClick={handleSearchMedicine} className="py-3 px-6 rounded-xl font-bold text-white transition-all bg-emerald-600 hover:bg-emerald-700">Search</button>
                </div>
                 {pharmacies.length > 0 && <div className="mt-4 space-y-2 max-h-32 overflow-y-auto custom-scrollbar pr-2">{pharmacies.map((p, i) => (
                    <div key={i} className="p-3 bg-slate-900/50 rounded-lg flex items-center gap-3"><Pill className="text-emerald-400"/><div><div className="font-semibold text-white">{p.shop}</div><div className="text-sm text-gray-400">{p.dist} - {p.area} ({p.time})</div></div></div>
                 ))}</div>}
            </Card>
          </div>

          {/* Bottom Row */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-4"><Package className="text-amber-400" /> Nutrient Stock</h2>
              <div className="space-y-3 max-h-48 overflow-y-auto custom-scrollbar pr-2">
                {nutrients.map((n) => ( <div key={n.id} className="p-3 bg-slate-900/50 rounded-lg flex justify-between items-center"><div><div className="font-semibold text-white">{n.name}</div><div className="text-sm text-gray-400">For: {n.forAges}</div></div><div className="text-lg font-bold text-amber-400">{n.qty} units</div></div>))}
              </div>
              <button onClick={() => setShowAddNutrient(true)} className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold text-white transition-all bg-slate-700/50 hover:bg-slate-700"><PlusCircle size={18}/> Add/Update Stock</button>
            </Card>
            <Card>
              <h2 className="flex items-center gap-3 text-xl font-bold text-white mb-4"><FileText className="text-rose-400" /> Doctor Reports</h2>
              <div className="space-y-3 max-h-48 overflow-y-auto custom-scrollbar pr-2">
                {reports.map((r) => ( <div key={r.id} className="p-3 bg-slate-900/50 rounded-lg flex justify-between items-center"><div><div className="font-semibold text-white">{r.patient}</div><div className="text-sm text-gray-400">{r.uploadedBy} • {r.date}</div></div><button onClick={() => setViewReport(r)} className="py-1 px-4 rounded-md font-semibold border border-slate-600 text-gray-300 hover:bg-slate-700 transition">View</button></div>))}
              </div>
            </Card>
          </div>
        </div>

        {/* --- Modals --- */}
        {showRegisteredList && (<Modal onClose={() => setShowRegisteredList(false)}>...</Modal>)}
        {showAddNutrient && (<Modal onClose={() => setShowAddNutrient(false)}>...</Modal>)}
        {viewReport && (<Modal onClose={() => setViewReport(null)}>...</Modal>)}
        {/* {showAppointmentForm && (<Modal onClose={() => setShowAppointmentForm(false)}><AppointmentForm/></Modal>)} */}
      </div>
    </main>
  );
}