import { useEffect, useState } from "react";
import { Search, CheckCircle, XCircle, Pill } from "lucide-react";

export default function MedicalDashboard() {
  const [medicines, setMedicines] = useState([
    { id: 1, name: "Paracetamol", quantity: 20 },
    { id: 2, name: "Amoxicillin", quantity: 0 },
    { id: 3, name: "Vitamin C", quantity: 15 },
    { id: 4, name: "Ibuprofen", quantity: 5 },
    { id: 5, name: "ORS Solution", quantity: 0 },
  ]);
  const [search, setSearch] = useState("");

  // Simulate real-time updates (stock changes)
  useEffect(() => {
    const interval = setInterval(() => {
      setMedicines((prev) =>
        prev.map((med) => ({
          ...med,
          quantity: Math.max(
            0,
            med.quantity + (Math.random() > 0.5 ? 1 : -1) // random stock updates
          ),
        }))
      );
    }, 5000); // update every 5 sec
    return () => clearInterval(interval);
  }, []);

  const filteredMedicines = medicines.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-8 bg-gradient-to-b from-white to-green-50 min-h-screen">
      <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-2">
        <Pill className="w-8 h-8 text-green-600" /> Medical Dashboard
      </h2>

      {/* Search bar */}
      <div className="mb-6 flex items-center border rounded-lg px-4 py-2 bg-white shadow-sm">
        <Search className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search medicine..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none"
        />
      </div>

      {/* Medicines Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-green-100">
            <tr>
              <th className="p-3">Medicine</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredMedicines.length > 0 ? (
              filteredMedicines.map((med) => (
                <tr key={med.id} className="border-t hover:bg-gray-50">
                  <td className="p-3 font-medium">{med.name}</td>
                  <td className="p-3">{med.quantity}</td>
                  <td className="p-3">
                    {med.quantity > 0 ? (
                      <span className="flex items-center text-green-600">
                        <CheckCircle className="w-5 h-5 mr-1" /> Available
                      </span>
                    ) : (
                      <span className="flex items-center text-red-600">
                        <XCircle className="w-5 h-5 mr-1" /> Out of Stock
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-4 text-center text-gray-500">
                  No medicine found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
