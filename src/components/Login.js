import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Stethoscope, Lock } from "lucide-react";

export default function Login() {
  const { role } = useParams(); 
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Credentials per role
  const demoUsers = {
    Patient: { email: "patient@gmail.com", password: "patient123" },
    Doctor: { email: "doctor@gmail.com", password: "doctor123" },
    Anganwadi: { email: "anganwadi@gmail.com", password: "anganwadi123" },
  };

  const handleLogin = (e) => {
    e.preventDefault();
     const normalizedRole = role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
const currentUser = demoUsers[normalizedRole];

if (!currentUser) {
  setError("Invalid role");
  return;
}

if (email === currentUser.email && password === currentUser.password) {
  setError("");
  if (normalizedRole === "Patient") navigate("/PatientDashboard");
  else if (normalizedRole === "Doctor") navigate("/DoctorDashboard");
  else if (normalizedRole === "Anganwadi") navigate("/AganwadiDashboard");
} else {
  setError("Invalid email or password");
}


  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-100 via-white to-blue-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96">
        <div className="flex items-center justify-center mb-6">
          <Stethoscope className="w-10 h-10 text-teal-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">
            {role ? role + " Login" : "Login"}
          </h2>
        </div>

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button className="w-full flex items-center justify-center gap-2 bg-teal-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-teal-700 transition">
            <Lock className="w-5 h-5" /> Login
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-600 text-center">
          Not registered?{" "}
          <Link
            to={`/signup/${role}`}
            className="text-teal-600 font-semibold hover:underline"
          >
            Signup here
          </Link>
        </p>

        {role && demoUsers[role] && (
          <p className="mt-2 text-center text-gray-600 text-sm">
            Demo credentials for practice:
            <br />
            Email: <span className="font-semibold">{demoUsers[role].email}</span>
            <br />
            Password: <span className="font-semibold">{demoUsers[role].password}</span>
          </p>
        )}
      </div>
    </div>
  );
}
