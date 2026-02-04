import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const AdvanceRequest = () => {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("Pending");

  const handleSubmit = () => {
    setSubmitted(true);
    setStatus("Pending");

    // 🔔 Backend-ready notification scheduling (simulation)
    console.log("📅 Advance blood request saved");
    console.log("🔔 Notifications will be sent based on required date");
  };

  return (
    <section className="pt-24 pb-16 bg-[#F9FAFB] font-openS">
      <div className="max-w-[1200px] mx-auto px-4 space-y-10">

        {/* INFO BANNER */}
        <div className="bg-[#FFF1F2] border border-[#FBCFE8] p-6 rounded-lg text-center">
          <h1 className="text-2xl font-bold text-[#E11D48]">
            Advance Blood Request
          </h1>
          <p className="text-sm text-gray-600 mt-2">
          Please use this request for planned surgery or future blood requirements.
          </p>
        </div>

        {/* FORM */}
        {!submitted && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-bold text-[#E11D48] mb-4">
              Advance Blood Request Form
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <input className="border px-4 py-2 rounded" placeholder="Patient Name" />

              <select className="border px-4 py-2 rounded">
                <option value="">Select Blood Group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>

              <input
                type="number"
                min="1"
                className="border px-4 py-2 rounded"
                placeholder="Units Needed"
              />

              {/* Required Date */}
              <input
                type="date"
                className="border px-4 py-2 rounded"
              />

              {/* Preferred Time */}
              <select className="border px-4 py-2 rounded">
                <option value="">Preferred Time</option>
                <option>Morning</option>
                <option>Evening</option>
                <option>Anytime</option>
              </select>

              <input className="border px-4 py-2 rounded" placeholder="Hospital Name" />
              <input className="border px-4 py-2 rounded" placeholder="Hospital Location" />
              <input className="border px-4 py-2 rounded" placeholder="Contact Number" />

              {/* Optional Note */}
              <textarea
                rows="3"
                className="border px-4 py-2 rounded md:col-span-2"
                placeholder="Optional note (doctor instruction / surgery info)"
              />

              <button
                onClick={handleSubmit}
                className="md:col-span-2 bg-[#E11D48] text-white py-3 rounded font-semibold hover:opacity-90 transition"
              >
                Submit Advance Request
              </button>
            </div>
          </div>
        )}

        {/* AFTER SUBMIT */}
        {submitted && (
          <div className="space-y-8">

            {/* CONFIRMATION */}
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h2 className="text-xl font-bold text-[#E11D48]">
                Advance Request Submitted
              </h2>
              <p className="text-sm text-gray-600 mt-2">
              Your request has been successfully saved. 
              Donor notifications will be sent according to the scheduled time.
              </p>
            </div>

            {/* EXPECTED FLOW */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-[#E11D48] mb-3">
                What will happen next?
              </h3>

              <ul className="space-y-2 text-sm text-gray-700">
              
                <li>Matching will start 3–5 days before the required date</li>
            
<li>Nearby registered donors will be notified first</li>
<li> Notifications will be sent step by step</li>
<li> Status will be updated once sufficient donors are confirmed</li>

              </ul>
            </div>

            {/* STATUS TRACKER */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-[#E11D48] mb-3">
                Request Status
              </h3>

              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-4 py-2 rounded bg-[#E11D48] text-white">
                  Pending
                </span>
                <span className="px-4 py-2 rounded bg-gray-200 text-gray-600">
                  Matching
                </span>
                <span className="px-4 py-2 rounded bg-gray-200 text-gray-600">
                  Confirmed
                </span>
                <span className="px-4 py-2 rounded bg-gray-200 text-gray-600">
                  Completed
                </span>
              </div>
            </div>

            {/* ACTION */}
            <div className="text-center">
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm text-[#E11D48] underline"
              >
                Edit or Create New Request
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default AdvanceRequest;

