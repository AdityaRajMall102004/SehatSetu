import { useNavigate } from "react-router-dom";
import { Stethoscope, User, Home } from "lucide-react"; // icons

export default function Body() {
  const navigate = useNavigate();

  const handleNavigate = (role, type) => {
    navigate(`/${type}/${role}`);
  };

  return (
    <main className="px-6 py-12 bg-gradient-to-b from-green-50 to-white min-h-screen">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700 mb-4">
          Welcome to SehatSetu Nabha
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          A healthcare platform connecting{" "}
          <span className="font-semibold text-green-600">Patients</span>,{" "}
          <span className="font-semibold text-blue-600">Doctors</span>, and{" "}
          <span className="font-semibold text-purple-600">Anganwadi Workers</span>{" "}
          to improve medical access in Nabha & nearby villages.
          <br />
          <span className="text-sm text-gray-500">
            (स्वास्थ्य सेवाओं तक सभी की पहुँच)
          </span>
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Patient Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
          <User className="mx-auto text-blue-600 w-14 h-14 mb-4" />
          <h3 className="text-2xl font-semibold text-blue-700">Patient</h3>
          <p className="text-gray-600 mb-6">रोगी (Patients) can book appointments and access health records.</p>
          <div className="space-x-4">
            <button
              onClick={() => handleNavigate("patient", "login")}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
            <button
              onClick={() => handleNavigate("patient", "signup")}
              className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50"
            >
              Signup
            </button>
          </div>
        </div>

        {/* Doctor Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
          <Stethoscope className="mx-auto text-green-600 w-14 h-14 mb-4" />
          <h3 className="text-2xl font-semibold text-green-700">Doctor</h3>
          <p className="text-gray-600 mb-6">डॉक्टर (Doctors) can manage patients, appointments, and prescriptions.</p>
          <div className="space-x-4">
            <button
              onClick={() => handleNavigate("doctor", "login")}
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
            >
              Login
            </button>
            <button
              onClick={() => handleNavigate("doctor", "signup")}
              className="border border-green-600 text-green-600 px-5 py-2 rounded-lg hover:bg-green-50"
            >
              Signup
            </button>
          </div>
        </div>

        {/* Anganwadi Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
          <Home className="mx-auto text-purple-600 w-14 h-14 mb-4" />
          <h3 className="text-2xl font-semibold text-purple-700">Anganwadi</h3>
          <p className="text-gray-600 mb-6">
            आंगनवाड़ी Workers help monitor maternal & child health in villages.
          </p>
          <div className="space-x-4">
            <button
              onClick={() => handleNavigate("anganwadi", "login")}
              className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700"
            >
              Login
            </button>
            <button
              onClick={() => handleNavigate("anganwadi", "signup")}
              className="border border-purple-600 text-purple-600 px-5 py-2 rounded-lg hover:bg-purple-50"
            >
              Signup
            </button>
          </div>
        </div>
      </div>

      {/* Footer Quote */}
      <div className="mt-16 text-center text-gray-600 italic">
        "स्वस्थ गांव, खुशहाल परिवार" • Healthy Villages, Happy Families
      </div>
    </main>
  );
}
