import { useParams, Link } from "react-router-dom";
import { UserPlus, Mail, Lock, User } from "lucide-react";

export default function Signup() {
  const { role } = useParams();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-100 via-white to-blue-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96">
        {/* Header */}
        <div className="flex items-center justify-center mb-6">
          <UserPlus className="w-10 h-10 text-teal-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">
            {role.charAt(0).toUpperCase() + role.slice(1)} Signup
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded-lg px-3">
            <User className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-lg"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg px-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-lg"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg px-3">
            <Lock className="w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-lg"
            />
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-teal-600 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-teal-700 transition">
            <UserPlus className="w-5 h-5" />
            Signup
          </button>
        </form>

        {/* Redirect to login */}
        <p className="mt-6 text-sm text-gray-600 text-center">
          Already registered?{" "}
          <Link
            to={`/login/${role}`}
            className="text-teal-600 font-semibold hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
