import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { UserPlus, User, Stethoscope, Home, Pill, ArrowRight } from "lucide-react";

const backgroundImageUrl = "https://images.unsplash.com/photo-1554469384-e58fac166873?q=80&w=2670&auto=format&fit=crop";

export default function Signup() {
  const { role } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const roleDetails = {
    patient: { title: "Create Patient Account", icon: User, accentColor: "cyan" },
    doctor: { title: "Doctor Registration", icon: Stethoscope, accentColor: "emerald" },
    anganwadi: { title: "Create Anganwadi Account", icon: Home, accentColor: "violet" },
    medical: { title: "Pharmacy Registration", icon: Pill, accentColor: "rose" },
  };

  const currentRole = roleDetails[role.toLowerCase()] || {
    title: "Create Account",
    icon: UserPlus,
    accentColor: "slate",
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    // --- REAL SIGNUP LOGIC WOULD GO HERE ---
    console.log({ name, email, password, role });
    alert(`Account created for ${name}! You can now log in.`);
    navigate(`/login/${role}`);
  };

  return (
    <main className="relative min-h-screen w-full bg-slate-900 font-sans">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm z-10" />

      <div className="relative z-20 flex items-center justify-center min-h-screen p-4 py-12">
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

          <form className="space-y-6" onSubmit={handleSignup}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe"
                className={`w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-gray-200 placeholder-gray-500
                           focus:outline-none focus:ring-2 focus:ring-${currentRole.accentColor}-500 focus:border-${currentRole.accentColor}-500 transition-all duration-200`}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
                className={`w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-gray-200 placeholder-gray-500
                           focus:outline-none focus:ring-2 focus:ring-${currentRole.accentColor}-500 focus:border-${currentRole.accentColor}-500 transition-all duration-200`}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Create Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••"
                className={`w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-gray-200 placeholder-gray-500
                           focus:outline-none focus:ring-2 focus:ring-${currentRole.accentColor}-500 focus:border-${currentRole.accentColor}-500 transition-all duration-200`}
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
              <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••"
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
              <UserPlus className="w-5 h-5" /> Create Account <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400">
            Already have an account?{" "}
            <Link to={`/login/${role}`} className={`font-semibold text-${currentRole.accentColor}-400 hover:text-${currentRole.accentColor}-300 hover:underline transition`}>
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}