import { CalendarCheck, FileText, Users, BellRing } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Online Appointments",
      desc: "Book and manage doctor consultations from the comfort of your home.",
      icon: <CalendarCheck className="w-8 h-8 text-teal-600 mb-3" />,
    },
    {
      title: "Digital Health Records",
      desc: "Securely store and access your medical history anytime, anywhere.",
      icon: <FileText className="w-8 h-8 text-teal-600 mb-3" />,
    },
    {
      title: "Anganwadi Support",
      desc: "Track nutrition and maternal health at the community level.",
      icon: <Users className="w-8 h-8 text-teal-600 mb-3" />,
    },
    {
      title: "Emergency Alerts",
      desc: "Instantly notify nearby hospitals and caregivers during emergencies.",
      icon: <BellRing className="w-8 h-8 text-red-600 mb-3" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10 text-center">
        <h1 className="text-3xl font-bold text-teal-700 mb-8">Our Services</h1>
        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              {service.icon}
              <h2 className="text-xl font-semibold text-teal-600 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
