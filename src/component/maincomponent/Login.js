import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { User, Stethoscope, Home, Pill, Lock, ArrowRight } from "lucide-react";

// Use the same background image for consistency
const backgroundImageUrl = "https://images.unsplash.com/photo-1554469384-e58fac166873?q=80&w=2670&auto=format&fit=crop";

export default function Login() {
  const { role } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const roleDetails = {
    patient: {
      title: "Patient Login",
      icon: User,
      accentColor: "cyan",
      demoEmail: "patient@example.com",
      demoPassword: "patient123",
      dashboard: "/PatientDashboard",
    },
    doctor: {
      title: "Doctor Login",
      icon: Stethoscope,
      accentColor: "emerald",
      demoEmail: "doctor@example.com",
      demoPassword: "doctor123",
      dashboard: "/DoctorDashboard",
    },
    anganwadi: {
      title: " Login",
      icon: Home,
      accentColor: "violet",
      demoEmail: "worker@example.com",
      demoPassword: "worker123",
      dashboard: "/AganwadiDashboard",
    },
    medical: {
      title: "Pharmacy Login",
      icon: Pill,
      accentColor: "rose",
      demoEmail: "pharmacy@example.com",
      demoPassword: "pharmacy123",
      dashboard: "/MedicalDashboard",
    },
  };

  const currentRole = roleDetails[role.toLowerCase()] || {
    title: "Login",
    icon: Lock,
    accentColor: "slate",
    demoEmail: "N/A",
    demoPassword: "N/A",
    dashboard: "/",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === currentRole.demoEmail && password === currentRole.demoPassword) {
      setError("");
      navigate(currentRole.dashboard);
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-slate-900 font-sans">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm z-10" />

      <div className="relative z-20 flex items-center justify-center min-h-screen p-4">
        <div
          className={`w-full max-w-md bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl
                     border-t-4 border-t-${currentRole.accentColor}-500 transition-all duration-300 hover:shadow-${currentRole.accentColor}-500/10`}
        >
          <div className="flex flex-col items-center mb-8">
            <div className={`mb-4 p-3 rounded-full bg-gradient-to-br from-${currentRole.accentColor}-500/20 to-slate-800/10`}>
              <currentRole.icon className={`w-12 h-12 text-${currentRole.accentColor}-400`} strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">{currentRole.title}</h2>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email" id="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={`w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-gray-200 placeholder-gray-500
                           focus:outline-none focus:ring-2 focus:ring-${currentRole.accentColor}-500 focus:border-${currentRole.accentColor}-500 transition-all duration-200`}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password" id="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-gray-200 placeholder-gray-500
                           focus:outline-none focus:ring-2 focus:ring-${currentRole.accentColor}-500 focus:border-${currentRole.accentColor}-500 transition-all duration-200`}
                required
              />
            </div>
            {error && <p className="text-rose-400 text-sm font-medium text-center">{error}</p>}
            <button
              type="submit"
             className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold text-white 
  transition-all duration-300 shadow-lg
  bg-gradient-to-r from-${currentRole.accentColor}-500 to-${currentRole.accentColor}-600 
  hover:from-${currentRole.accentColor}-600 hover:to-${currentRole.accentColor}-700
  hover:shadow-xl hover:shadow-${currentRole.accentColor}-500/20 transform hover:-translate-y-0.5
  border border-red-400 shadow-red-400/40`}

            >
              <Lock className="w-5 h-5" /> Login <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400">
            Don't have an account?{" "}
            <Link to={`/signup/${role}`} className={`font-semibold text-${currentRole.accentColor}-400 hover:text-${currentRole.accentColor}-300 hover:underline transition`}>
              Sign up
            </Link>
          </p>
          
          {currentRole.demoEmail !== "N/A" && (
            <div className={`mt-6 p-4 rounded-lg bg-slate-900/30 border border-slate-700 text-sm text-center`}>
                <p className="font-semibold text-gray-300 mb-1">Demo Credentials:</p>
                <p className="text-gray-400">Email: <span className={`font-semibold text-${currentRole.accentColor}-400`}>{currentRole.demoEmail}</span></p>
                <p className="text-gray-400">Password: <span className={`font-semibold text-${currentRole.accentColor}-400`}>{currentRole.demoPassword}</span></p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}