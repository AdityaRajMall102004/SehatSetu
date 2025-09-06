import { useNavigate } from "react-router-dom";
import { Stethoscope, User, Home, Pill, ActivitySquare } from "lucide-react";

// For the background image, find a subtle, abstract tech or medical background.
// Good sources are Unsplash, Pexels, or SVG background generators.
// Example search terms: "plexus background", "network nodes", "abstract technology".
// I'm using a placeholder URL here. Replace it with your chosen image.
const backgroundImageUrl = "https://images.unsplash.com/photo-1554469384-e58fac166873?q=80&w=2670&auto=format&fit=crop"; 

export default function Body() {
  const navigate = useNavigate();

  const handleNavigate = (role, type) => {
    navigate(`/${type}/${role}`);
  };

  const cardData = [
    {
      role: "patient",
      title: "For Patients",
      description: "Book appointments, view medical records, and connect with your doctor from anywhere.",
      icon: User,
      accentColor: "cyan",
    },
    {
      role: "doctor",
      title: "For Doctors",
      description: "Manage your schedule, consult with patients, and issue digital prescriptions seamlessly.",
      icon: Stethoscope,
      accentColor: "emerald",
    },
    {
      role: "anganwadi", // Role name kept for navigation logic
      title: "For Anganwadi ",
      description: "Track community health, manage maternal and child care, and access vital data.",
      icon: Home,
      accentColor: "violet",
    },
    {
      role: "medical", // Role name kept for navigation logic
      title: "For Pharmacies",
      description: "Receive digital prescriptions, manage inventory, and serve your customers faster.",
      icon: Pill,
      accentColor: "rose",
    },
  ];

  return (
    <main
      className="relative min-h-screen w-full bg-slate-900 text-gray-200 font-sans overflow-hidden"
    >
      {/* Background Image and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm z-10" />

      {/* Content Container */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 py-20">
        {/* Heading Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <ActivitySquare className="mx-auto w-16 h-16 mb-6 text-cyan-400" strokeWidth={1.5} />
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-white">
            Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">SehatSetu</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering Health, Connecting Lives. We seamlessly link patients, doctors, health workers, and pharmacies to revolutionize healthcare access for all.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {cardData.map((card) => (
            <div
              key={card.role}
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 flex flex-col items-center text-center 
                         border border-white/20 shadow-2xl
                         transform transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-cyan-500/10"
            >
              <div className={`mb-6 p-4 rounded-full bg-gradient-to-br from-${card.accentColor}-500/20 to-slate-800/10`}>
                <card.icon className={`w-14 h-14 text-${card.accentColor}-400`} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow">
                {card.description}
              </p>
             <div className="w-full flex flex-col space-y-3">
  {/* Login Button */}
  <button
    onClick={() => handleNavigate(card.role, "login")}
    className={`w-full py-3 px-6 rounded-xl font-semibold shadow-md transition-all duration-300
      bg-gradient-to-r from-green-500 to-emerald-600 text-white
      hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:shadow-green-400/40
      transform hover:-translate-y-0.5`}
  >
    Login
  </button>

  {/* Signup Button */}
  <button
    onClick={() => handleNavigate(card.role, "signup")}
    className={`w-full py-3 px-6 rounded-xl font-semibold shadow-md transition-all duration-300
      bg-gradient-to-r from-blue-500 to-indigo-600 text-white
      hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-400/40
      transform hover:-translate-y-0.5`}
  >
    Signup
  </button>
</div>

            </div>
          ))}
        </div>

        {/* Footer Quote */}
        <div className="mt-24 text-center text-gray-400 text-lg font-light">
          <p>"Healthy Communities, Thriving Families"</p>
        </div>
      </div>
    </main>
  );
}