import React from "react";
import { FileText, PlusCircle, Download, TestTube2, Bone, BrainCircuit } from 'lucide-react';

// Use the same background for thematic consistency
const backgroundImageUrl = "https://images.unsplash.com/photo-1554469384-e58fac166873?q=80&w=2670&auto-format&fit=crop";

// --- Enriched Mock Data ---
// In a real app, this would come from an API
const recordTypes = {
  'Lab Report': { icon: TestTube2, color: 'violet' },
  'Radiology': { icon: Bone, color: 'sky' },
  'Scan': { icon: BrainCircuit, color: 'rose' }
};

const records = [
  { 
    id: 1, 
    title: "Full Blood Count", 
    date: "2025-08-15", 
    type: 'Lab Report', 
    doctor: 'Dr. Anjali Sharma', 
    fileUrl: '#' 
  },
  { 
    id: 2, 
    title: "Chest X-Ray (AP/LAT)", 
    date: "2025-08-20", 
    type: 'Radiology', 
    doctor: 'Dr. Sameer Gupta', 
    fileUrl: '#' 
  },
  { 
    id: 3, 
    title: "Brain MRI Scan", 
    date: "2025-09-02", 
    type: 'Scan', 
    doctor: 'Dr. Sameer Gupta', 
    fileUrl: '#' 
  },
  { 
    id: 4, 
    title: "Lipid Panel", 
    date: "2025-09-04", 
    type: 'Lab Report', 
    doctor: 'Dr. Anjali Sharma', 
    fileUrl: '#' 
  },
];
// --- End Mock Data ---

export default function HealthRecords() {
  return (
    <main className="relative min-h-screen w-full bg-slate-900 font-sans text-gray-200">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgroundImageUrl})` }} />
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm z-10" />
      
      <div className="relative z-20 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          {/* --- Header --- */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <FileText className="w-10 h-10 text-cyan-400" strokeWidth={1.5} />
              <div>
                <h1 className="text-3xl font-bold text-white">Health Records</h1>
                <p className="text-gray-400">Your complete medical history in one place.</p>
              </div>
            </div>
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto py-2.5 px-5 rounded-xl font-bold text-white transition-all duration-300 transform bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 hover:from-cyan-600 hover:to-blue-700 hover:shadow-xl hover:shadow-cyan-500/50 hover:-translate-y-0.5">
              <PlusCircle size={20} />
              Upload Record
            </button>
          </div>

          {/* --- Records List --- */}
          <div className="space-y-4">
            {records.map((rec) => {
              const RecordIcon = recordTypes[rec.type]?.icon || FileText;
              const accentColor = recordTypes[rec.type]?.color || 'slate';

              return (
                <div 
                  key={rec.id} 
                  className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-white/10 p-4
                             flex items-center gap-4
                             transform transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-${accentColor}-500/10`}>
                    <RecordIcon className={`w-7 h-7 text-${accentColor}-400`} strokeWidth={1.5}/>
                  </div>
                  
                  {/* Record Info */}
                  <div className="flex-grow">
                    <p className="font-bold text-lg text-white">{rec.title}</p>
                    <p className="text-sm text-gray-400">
                      Added on {new Date(rec.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} • by {rec.doctor}
                    </p>
                  </div>

                  {/* Action Button */}
                  <a 
                    href={rec.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center gap-2 py-2 px-4 rounded-lg font-semibold border-2 border-slate-600 text-gray-300
                               hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors duration-200"
                  >
                    <Download size={16} />
                    View
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}