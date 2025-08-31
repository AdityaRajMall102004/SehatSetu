import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppointmentForm from "./AppointmentForm";

export default function DoctorDashboard() {
  const navigate = useNavigate();

  const [availability, setAvailability] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [doctorData, setDoctorData] = useState({
    name: "Dr. Sharma",
    specialization: "General Medicine",
    email: "dr.sharma@example.com",
    phone: "+91 98765 43210",
    todayAppointments: [
      { patient: "Aditya Raj Mall", time: "10:00 AM", reason: "Fever & Cough" },
      { patient: "Priya Singh", time: "11:30 AM", reason: "Routine Checkup" },
    ],
    patients: [
      { name: "Aditya Raj Mall", age: 21, lastVisit: "2025-08-15" },
      { name: "Priya Singh", age: 25, lastVisit: "2025-08-20" },
    ],
  });

  const toggleAvailability = () => {
    setAvailability(!availability);
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleAddAppointment = (newAppointment) => {
    setDoctorData((prev) => ({
      ...prev,
      todayAppointments: [...prev.todayAppointments, newAppointment],
    }));
    setShowForm(false); // close form after submit
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar 
      <nav className="bg-green-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Doctor Dashboard</h1>
          <button
            className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-100 transition-all"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>*/}

      <div className="max-w-7xl mx-auto p-6">
        {/* Doctor Info */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">👨‍⚕️ {doctorData.name}</h2>
            <p className="text-gray-600">{doctorData.specialization}</p>
            <p className="text-gray-600">{doctorData.email}</p>
            <p className="text-gray-600">{doctorData.phone}</p>
          </div>
          {/* Availability Toggle */}
          <button
            onClick={toggleAvailability}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              availability
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-red-600 text-white hover:bg-red-700"
            }`}
          >
            {availability ? "Available ✅" : "Not Available ❌"}
          </button>
        </div>

        {/* Today's Appointments */}
        <div className="bg-green-50 rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">📅 Today's Appointments</h2>
          {doctorData.todayAppointments.length > 0 ? (
            doctorData.todayAppointments.map((appt, idx) => (
              <div
                key={idx}
                className="mb-3 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{appt.patient}</p>
                  <p className="text-gray-600 text-sm">{appt.reason}</p>
                </div>
                <span className="text-gray-700 font-semibold">{appt.time}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No appointments today.</p>
          )}
        </div>

        {/* Patient List */}
        <div className="bg-blue-50 rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">👥 Patients</h2>
          {doctorData.patients.map((patient, idx) => (
            <div
              key={idx}
              className="mb-3 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{patient.name}</p>
                <p className="text-gray-600 text-sm">Age: {patient.age}</p>
                <p className="text-gray-600 text-sm">
                  Last Visit: {patient.lastVisit}
                </p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all">
                View
              </button>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-600 text-white py-4 rounded-xl shadow-lg hover:bg-green-700 transition-all transform hover:scale-105"
          >
            📅 Add Appointment
          </button>
          <button className="bg-blue-600 text-white py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105">
            🩺 Patient History
          </button>
          <button className="bg-purple-600 text-white py-4 rounded-xl shadow-lg hover:bg-purple-700 transition-all transform hover:scale-105">
            💊 Prescribe Medicine
          </button>
          <button className="bg-yellow-500 text-white py-4 rounded-xl shadow-lg hover:bg-yellow-600 transition-all transform hover:scale-105">
            🚨 Emergency Alert
          </button>
        </div>

        {/* Appointment Form Modal */}
        {showForm && (
          <AppointmentForm
            onClose={() => setShowForm(false)}
            onSubmit={handleAddAppointment}
          />
        )}
      </div>
    </div>
  );
}
