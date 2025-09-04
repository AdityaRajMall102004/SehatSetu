import { useNavigate } from "react-router-dom";

export default function AnganwadiDashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-green-50 font-sans p-6">
      <header className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-6">
        <h1 className="text-2xl font-bold text-green-700">Anganwadi Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-white border-2 border-green-600 text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-100 transition-all"
        >
          Logout
        </button>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-green-700 mb-2">Registered Children</h2>
          <p className="text-gray-700">View and manage all children registered under your Anganwadi center.</p>
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            View List
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-green-700 mb-2">Health Checkups</h2>
          <p className="text-gray-700">Schedule and track routine health checkups and vaccinations.</p>
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Manage Checkups
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-green-700 mb-2">Nutrition Program</h2>
          <p className="text-gray-700">Monitor meals and nutrition plans provided at your center.</p>
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            View Nutrition
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-green-700 mb-2">Reports</h2>
          <p className="text-gray-700">Generate reports for children, health, and nutrition activities.</p>
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Generate Report
          </button>
        </div>
      </main>
    </div>
  );
}
