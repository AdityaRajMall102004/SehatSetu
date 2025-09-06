import { useState } from "react";

export default function MedicalDashboard() {
  return (
    <div className="p-8 bg-gradient-to-b from-white to-green-50 min-h-screen">
      {/* Header */}
      <div className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-2">
        <div className="w-8 h-8 text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
            <path d="m8.5 8.5 7 7" />
          </svg>
        </div>
        Pharmacy Medicine Management
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex items-center border rounded-lg px-4 py-2 bg-white shadow-sm">
        <div className="text-gray-500 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search medicine..."
          className="w-full outline-none"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-green-100">
            <tr>
              <th className="p-3 font-semibold text-green-700">Medicine Name</th>
              <th className="p-3 font-semibold text-green-700">Brand</th>
              <th className="p-3 font-semibold text-green-700">Dosage Form</th>
              <th className="p-3 font-semibold text-green-700">Strength</th>
              <th className="p-3 font-semibold text-green-700">Last Updated</th>
              <th className="p-3 font-semibold text-green-700">Quantity Left</th>
              <th className="p-3 font-semibold text-green-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                name: "Paracetamol",
                brand: "Crocin",
                form: "Tablet",
                strength: "500mg",
                date: "2024-09-02",
                qty: 150,
              },
              {
                name: "Amoxicillin",
                brand: "Amoxil",
                form: "Capsule",
                strength: "250mg",
                date: "2024-09-01",
                qty: 75,
              },
              {
                name: "Ibuprofen",
                brand: "Advil",
                form: "Tablet",
                strength: "200mg",
                date: "2024-08-30",
                qty: 0,
              },
              {
                name: "Cetirizine",
                brand: "Zyrtec",
                form: "Syrup",
                strength: "5mg/5ml",
                date: "2024-09-03",
                qty: 28,
              },
              {
                name: "Metformin",
                brand: "Glucophage",
                form: "Tablet",
                strength: "850mg",
                date: "2024-09-04",
                qty: 120,
              },
              {
                name: "Aspirin",
                brand: "Dispirin",
                form: "Tablet",
                strength: "75mg",
                date: "2024-08-28",
                qty: 95,
              },
              {
                name: "Azithromycin",
                brand: "Zithromax",
                form: "Tablet",
                strength: "500mg",
                date: "2024-09-01",
                qty: 60,
              },
              {
                name: "Omeprazole",
                brand: "Prilosec",
                form: "Capsule",
                strength: "20mg",
                date: "2024-08-29",
                qty: 40,
              },
              {
                name: "Losartan",
                brand: "Cozaar",
                form: "Tablet",
                strength: "50mg",
                date: "2024-09-02",
                qty: 100,
              },
              {
                name: "Atorvastatin",
                brand: "Lipitor",
                form: "Tablet",
                strength: "10mg",
                date: "2024-09-04",
                qty: 85,
              },
            ].map((med, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="p-3 font-medium">{med.name}</td>
                <td className="p-3 text-gray-600">{med.brand}</td>
                <td className="p-3 text-gray-600">{med.form}</td>
                <td className="p-3 text-gray-600">{med.strength}</td>
                <td className="p-3 text-gray-500 text-sm">{med.date}</td>
                <td className="p-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full font-medium ${
                      med.qty > 0
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {med.qty}
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <button
                      disabled={med.qty === 0}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors font-bold text-lg ${
                        med.qty === 0
                          ? "bg-red-300 cursor-not-allowed text-white"
                          : "bg-red-500 hover:bg-red-600 text-white"
                      }`}
                    >
                      −
                    </button>
                    <button className="w-8 h-8 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors font-bold text-lg">
                      +
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-6 flex justify-between items-center text-sm text-gray-500">
        <div>Showing 10 of 10 medicines</div>
        <div className="flex items-center gap-2">
          <span>Stock Status:</span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Out of Stock</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
