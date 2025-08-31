import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10 text-center">
        <h1 className="text-3xl font-bold text-teal-700 mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-6">
          Have questions or need help? Reach out to us through any of the
          following ways:
        </p>
        <div className="space-y-4">
          <p className="flex items-center justify-center gap-3 text-gray-700">
            <Mail className="text-teal-600" /> support@sehatsetu.com
          </p>
          <p className="flex items-center justify-center gap-3 text-gray-700">
            <Phone className="text-teal-600" /> +91 98765 43210
          </p>
          <p className="flex items-center justify-center gap-3 text-gray-700">
            <MapPin className="text-teal-600" /> Punjab, India
          </p>
        </div>
      </div>
    </div>
  );
}
