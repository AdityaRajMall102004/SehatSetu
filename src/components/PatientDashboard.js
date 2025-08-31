import React from "react";
import { useNavigate } from "react-router-dom";

export default function PatientDashboard() {
    const navigate = useNavigate();
  // Sample user data (you can replace this with real data from API)
  const userData = {
    name: "Aditya Raj Mall",
    age: 21,
    gender: "Male",
    email: "aditya@example.com",
    phone: "+91 98765 43210",
    appointments: [
      { doctor: "Dr. Sharma", date: "2025-09-01", time: "10:00 AM" },
      { doctor: "Dr. Priya", date: "2025-09-03", time: "2:00 PM" },
    ],
    medicines: [
      { name: "Paracetamol", quantity: "2 strips", status: "Available" },
      { name: "Crocin", quantity: "1 strip", status: "Limited" },
    ],
    healthRecords: [
      { title: "Blood Test", date: "2025-08-15" },
      { title: "X-Ray", date: "2025-08-20" },
    ],
  };
  const handleLogout = () => {
    navigate("/"); 
  };


  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar 
      <nav className="bg-green-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">SehatSetu Dashboard</h1>
          <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-100 transition-all" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>*/}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* User Info Card */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">👤 User Info</h2>
            <p><span className="font-semibold">Name:</span> {userData.name}</p>
            <p><span className="font-semibold">Age:</span> {userData.age}</p>
            <p><span className="font-semibold">Gender:</span> {userData.gender}</p>
            <p><span className="font-semibold">Email:</span> {userData.email}</p>
            <p><span className="font-semibold">Phone:</span> {userData.phone}</p>
          </div>

          {/* Appointments Card */}
          <div className="bg-green-50 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">📅 Appointments</h2>
            {userData.appointments.map((appt, idx) => (
              <div key={idx} className="mb-3 p-3 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <p><span className="font-semibold">Doctor:</span> {appt.doctor}</p>
                <p><span className="font-semibold">Date:</span> {appt.date}</p>
                <p><span className="font-semibold">Time:</span> {appt.time}</p>
              </div>
            ))}
          </div>

          {/* Medicines Card */}
          <div className="bg-blue-50 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">💊 Medicines</h2>
            {userData.medicines.map((med, idx) => (
              <div key={idx} className="mb-3 p-3 bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex justify-between items-center">
                <div>
                  <p className="font-semibold">{med.name}</p>
                  <p className="text-sm text-gray-600">{med.quantity}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  med.status === "Available" ? "bg-green-100 text-green-700" :
                  med.status === "Limited" ? "bg-yellow-100 text-yellow-700" :
                  "bg-red-100 text-red-700"
                }`}>{med.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Health Records */}
        <div className="bg-purple-50 rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">📋 Health Records</h2>
          <ul className="list-disc list-inside space-y-2">
            {userData.healthRecords.map((record, idx) => (
              <li key={idx} className="p-3 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <p className="font-semibold">{record.title}</p>
                <p className="text-gray-600 text-sm">Date: {record.date}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <button className="bg-green-600 text-white py-4 rounded-xl shadow-lg hover:bg-green-700 transition-all transform hover:scale-105">
            🩺 Book Appointment
          </button>
          <button className="bg-blue-600 text-white py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105">
            💊 Check Medicine
          </button>
          <button className="bg-purple-600 text-white py-4 rounded-xl shadow-lg hover:bg-purple-700 transition-all transform hover:scale-105">
            📋 Upload Health Record
          </button>
          <button className="bg-yellow-500 text-white py-4 rounded-xl shadow-lg hover:bg-yellow-600 transition-all transform hover:scale-105">
            🚨 Emergency
          </button>
        </div>
      </div>
    </div>
  );
}
