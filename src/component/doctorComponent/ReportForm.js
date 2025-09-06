import React, { useState } from "react";

export default function ReportForm({ onClose, onSubmit }) {
  const [reportData, setReportData] = useState({
    patientName: "",
    reportType: "",
    description: "",
    date: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(reportData);
    setReportData({ patientName: "", reportType: "", description: "", date: "" });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Add / View Report</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="patientName"
            value={reportData.patientName}
            onChange={handleChange}
            placeholder="Patient Name"
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="reportType"
            value={reportData.reportType}
            onChange={handleChange}
            placeholder="Report Type (e.g., Blood Test)"
            className="w-full p-2 border rounded-lg"
            required
          />
          <textarea
            name="description"
            value={reportData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 border rounded-lg"
            rows="3"
            required
          ></textarea>
          <input
            type="date"
            name="date"
            value={reportData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Save Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}