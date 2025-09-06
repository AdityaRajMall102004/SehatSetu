import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Video, Hospital, Search, User, Clock, Calendar as CalendarIcon, ArrowLeft, CheckCircle } from 'lucide-react';

// Use the same background for thematic consistency
const backgroundImageUrl = "https://images.unsplash.com/photo-1554469384-e58fac166873?q=80&w=2670&auto-format&fit=crop";

// --- Mock Data ---
const doctorsData = [
  { id: 1, name: 'Dr. Anjali Sharma', specialty: 'Cardiologist', type: 'both', avatar: 'https://i.pravatar.cc/150?u=doc1', availability: ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'] },
  { id: 2, name: 'Dr. Rohan Verma', specialty: 'Dermatologist', type: 'video', avatar: 'https://i.pravatar.cc/150?u=doc2', availability: ['10:00 AM', '12:00 PM', '03:00 PM'] },
  { id: 3, name: 'Dr. Priya Singh', specialty: 'Pediatrician', type: 'hospital', avatar: 'https://i.pravatar.cc/150?u=doc3', availability: ['09:30 AM', '11:00 AM', '01:30 PM', '04:00 PM'] },
  { id: 4, name: 'Dr. Sameer Gupta', specialty: 'Neurologist', type: 'both', avatar: 'https://i.pravatar.cc/150?u=doc4', availability: ['09:00 AM', '02:30 PM'] },
  { id: 5, name: 'Dr. Meera Desai', specialty: 'Cardiologist', type: 'hospital', avatar: 'https://i.pravatar.cc/150?u=doc5', availability: ['10:30 AM', '12:30 PM', '03:30 PM'] },
  { id: 6, name: 'Dr. Vikram Rathore', specialty: 'Orthopedic', type: 'video', avatar: 'https://i.pravatar.cc/150?u=doc6', availability: ['11:00 AM', '01:00 PM', '05:00 PM'] },
];

const specialties = ['All Specialties', 'Cardiologist', 'Dermatologist', 'Pediatrician', 'Neurologist', 'Orthopedic'];
// --- End Mock Data ---


export default function BookAppointment() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [appointmentType, setAppointmentType] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const filteredDoctors = useMemo(() => {
    return doctorsData.filter(doctor => {
      const typeMatch = appointmentType ? doctor.type === appointmentType || doctor.type === 'both' : true;
      const specialtyMatch = selectedSpecialty === 'All Specialties' || doctor.specialty === selectedSpecialty;
      const nameMatch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
      return typeMatch && specialtyMatch && nameMatch;
    });
  }, [appointmentType, selectedSpecialty, searchTerm]);

  const handleTypeSelect = (type) => { setAppointmentType(type); setStep(2); };
  const handleDoctorSelect = (doctor) => { setSelectedDoctor(doctor); setStep(3); };
  const handleSlotSelect = (slot) => { setSelectedSlot(slot); setStep(4); };
  const handleConfirm = () => { setStep(5); };
  const resetFlow = () => { setStep(1); setAppointmentType(null); setSearchTerm(''); setSelectedSpecialty('All Specialties'); setSelectedDoctor(null); setSelectedSlot(null); };

  const BackButton = ({ toStep }) => (
    <button onClick={() => setStep(toStep)} className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors mb-6">
      <ArrowLeft size={16}/> Back
    </button>
  );

  const Stepper = ({ currentStep }) => (
    <div className="mb-10 flex items-center w-full">
      {['Type', 'Doctor', 'Time', 'Confirm'].map((label, i) => (
        <React.Fragment key={i}>
          <div className="flex flex-col items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
              currentStep > i + 1 ? 'bg-gradient-to-r from-emerald-500 to-green-500' :
              currentStep === i + 1 ? 'bg-gradient-to-r from-cyan-500 to-blue-500 scale-110 shadow-lg shadow-cyan-500/30' : 
              'bg-slate-700'
            }`}>
              {currentStep > i + 1 ? <CheckCircle size={20} className="text-white"/> : <span className="font-bold text-white">{i + 1}</span>}
            </div>
            <p className={`mt-2 text-xs font-semibold ${currentStep >= i + 1 ? 'text-white' : 'text-gray-400'}`}>{label}</p>
          </div>
          {i < 3 && <div className={`flex-1 h-1 mx-2 transition-colors duration-300 ${currentStep > i + 1 ? 'bg-emerald-500' : 'bg-slate-700'}`}></div>}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <main className="relative min-h-screen w-full bg-slate-900 font-sans text-gray-200">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgroundImageUrl})` }} />
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm z-10" />
      
      <div className="relative z-20 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 space-y-6">
          
          {step < 5 && <Stepper currentStep={step} />}

          {/* --- Step 1: Choose Appointment Type --- */}
          {step === 1 && (
            <div className="text-center animate-fade-in-down">
              <h2 className="text-3xl font-bold text-white">Book an Appointment</h2>
              <p className="text-gray-400 mt-2">How would you like to consult with a doctor?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <button onClick={() => handleTypeSelect('video')} className="group text-center p-8 bg-slate-800/50 rounded-xl border-2 border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">
                  <Video className="h-16 w-16 mx-auto text-cyan-400" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mt-4 text-white">Video Consultation</h3>
                  <p className="text-gray-400 mt-1">Consult with a doctor from home.</p>
                </button>
                <button onClick={() => handleTypeSelect('hospital')} className="group text-center p-8 bg-slate-800/50 rounded-xl border-2 border-slate-700 hover:border-violet-400 hover:-translate-y-2 transition-all duration-300">
                  <Hospital className="h-16 w-16 mx-auto text-violet-400" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mt-4 text-white">In-Person Visit</h3>
                  <p className="text-gray-400 mt-1">Visit one of our partner clinics.</p>
                </button>
              </div>
            </div>
          )}

          {/* --- Step 2: Find a Doctor --- */}
          {step === 2 && (
            <div className="animate-fade-in-down">
              <BackButton toStep={1} />
              <h2 className="text-2xl font-bold text-white mb-4">Find a Doctor for your {appointmentType} visit</h2>
              <div className="flex flex-col md:flex-row gap-4 my-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input type="text" placeholder="Search by doctor's name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                </div>
                <select value={selectedSpecialty} onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full md:w-64 py-3 px-4 bg-slate-900/50 border border-slate-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  {specialties.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="space-y-4 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                {filteredDoctors.length > 0 ? filteredDoctors.map(doctor => (
                  <div key={doctor.id} onClick={() => handleDoctorSelect(doctor)} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-400 cursor-pointer transition-colors duration-200">
                    <img src={doctor.avatar} alt={doctor.name} className="w-16 h-16 rounded-full border-2 border-slate-600" />
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg text-white">{doctor.name}</h3>
                      <p className="text-cyan-400">{doctor.specialty}</p>
                    </div>
                    <div className="flex -space-x-2">
                        {doctor.type === 'video' || doctor.type === 'both' ? <Video size={20} className="text-cyan-400"/> : ''}
                        {doctor.type === 'hospital' || doctor.type === 'both' ? <Hospital size={20} className="text-violet-400"/> : ''}
                    </div>
                  </div>
                )) : (
                  <p className="text-center text-gray-400 py-8">No doctors found matching your criteria.</p>
                )}
              </div>
            </div>
          )}

          {/* --- Step 3: Select Time Slot --- */}
          {step === 3 && selectedDoctor && (
            <div className="animate-fade-in-down">
              <BackButton toStep={2} />
              <h2 className="text-2xl font-bold text-white">Select a Time Slot</h2>
              <div className="flex items-center gap-4 p-4 my-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <img src={selectedDoctor.avatar} alt={selectedDoctor.name} className="w-16 h-16 rounded-full border-2 border-slate-600" />
                  <div>
                      <h3 className="font-bold text-lg text-white">{selectedDoctor.name}</h3>
                      <p className="text-cyan-400">{selectedDoctor.specialty}</p>
                  </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {selectedDoctor.availability.map(slot => (
                  <button key={slot} onClick={() => handleSlotSelect(slot)} 
                  className={`py-3 px-2 rounded-lg transition font-semibold border-2 
                            ${selectedSlot === slot ? 'bg-cyan-500 border-cyan-400 text-white shadow-lg shadow-cyan-500/20' 
                                                  : 'bg-slate-700/50 border-slate-600 text-gray-300 hover:border-cyan-500 hover:text-white'}`}>
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* --- Step 4: Confirm Details --- */}
          {step === 4 && selectedDoctor && selectedSlot && (
              <div className="animate-fade-in-down">
                  <BackButton toStep={3} />
                  <h2 className="text-2xl font-bold text-white">Confirm Your Appointment</h2>
                  <div className="mt-6 p-6 border border-slate-700 rounded-lg bg-slate-800/50 space-y-5">
                      <div className="flex items-center gap-4"><User className="text-cyan-400" size={20}/><div><span className="font-semibold text-white">{selectedDoctor.name}</span> <span className="text-gray-400">({selectedDoctor.specialty})</span></div></div>
                      <div className="flex items-center gap-4">{appointmentType === 'video' ? <Video className="text-cyan-400" size={20}/> : <Hospital className="text-violet-400" size={20}/>}<span className="font-semibold capitalize text-white">{appointmentType} Consultation</span></div>
                      <div className="flex items-center gap-4"><CalendarIcon className="text-cyan-400" size={20}/><span className="font-semibold text-white">Today, 5 September 2025</span></div>
                      <div className="flex items-center gap-4"><Clock className="text-cyan-400" size={20}/><span className="font-semibold text-white">{selectedSlot}</span></div>
                  </div>
                  <button onClick={handleConfirm} className="w-full mt-8 py-3 rounded-xl font-bold text-white transition-all duration-300 transform bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 hover:from-cyan-600 hover:to-blue-700 hover:shadow-xl hover:shadow-cyan-500/50 hover:-translate-y-0.5">
                      Confirm Appointment
                  </button>
              </div>
          )}
          
          {/* --- Step 5: Success Message --- */}
          {step === 5 && (
            <div className="text-center animate-fade-in-down p-8">
                <CheckCircle className="h-20 w-20 mx-auto text-emerald-400" />
                <h2 className="text-3xl font-bold text-white mt-4">Appointment Booked!</h2>
                <p className="text-gray-400 mt-2">A confirmation has been sent to your email and you will receive a reminder.</p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <button onClick={() => navigate('/PatientDashboard')} className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400 hover:text-white transition-colors duration-300">
                        Back to Dashboard
                    </button>
                    <button onClick={resetFlow} className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                        Book Another Appointment
                    </button>
                </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}