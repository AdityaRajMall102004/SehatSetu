import React, { useState } from "react";
export default function PatientProfile() {
  const [userData] = useState({
    id: "P001",
    name: "Aditya Raj Mall",
    age: 21,
    gender: "Male",
    email: "aditya@example.com",
    phone: "+91 98765 43210",
    bloodGroup: "O+",
    address: "Nabha, Punjab, India",
    emergencyContact: "+91 91234 56789",
    insurance: "Ayushman Bharat - Active",
    chronicConditions: ["Diabetes"],
    allergies: ["Dust"],
  });
  return (
    <div className="min-h-screen bg-gray-50 font-sans p-6 flex justify-center items-start">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-6 mb-6">
          <div>
            <h2 className="text-3xl font-bold text-green-700">{userData.name}</h2>
            <p className="text-gray-500">{userData.email}</p>
            <p className="text-sm text-gray-400">Patient ID: {userData.id}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="px-4 py-2 bg-green-100 text-green-700 font-medium rounded-full">
              {userData.bloodGroup}
            </span>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">👤 Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <p><span className="font-semibold">Age:</span> {userData.age}</p>
          <p><span className="font-semibold">Gender:</span> {userData.gender}</p>
          <p><span className="font-semibold">Phone:</span> {userData.phone}</p>
          <p><span className="font-semibold">Emergency Contact:</span> {userData.emergencyContact}</p>
          <p><span className="font-semibold">Address:</span> {userData.address}</p>
          <p><span className="font-semibold">Insurance:</span> {userData.insurance}</p>
        </div>

        {/* Medical Info */}
        <h3 className="text-xl font-semibold text-gray-800 mb-3">🏥 Medical Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <p><span className="font-semibold">Chronic Conditions:</span> {userData.chronicConditions.join(", ")}</p>
          <p><span className="font-semibold">Allergies:</span> {userData.allergies.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
