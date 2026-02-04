// import { useState, useEffect, useRef } from "react";

// const Emergency = () => {
//   const [loading, setLoading] = useState(false);
//   const [showResult, setShowResult] = useState(false);
//   const [animateCards, setAnimateCards] = useState(false);

//   const resultRef = useRef(null);

//   // dummy donor data (3 ta card)
//   const donors = [
//     {
//       name: "Rahim",
//       bloodGroup: "O+",
//       lastDonationDays: 120,
//       phone: "01XXXXXXXXX",
//       location: "Mirpur, Dhaka",
//     },
//     {
//       name: "Karim",
//       bloodGroup: "O-",
//       lastDonationDays: 95,
//       phone: "01XXXXXXXXX",
//       location: "Mohammadpur, Dhaka",
//     },
//     {
//       name: "Hasan",
//       bloodGroup: "A+",
//       lastDonationDays: 150,
//       phone: "01XXXXXXXXX",
//       location: "Dhanmondi, Dhaka",
//     },
//   ];

//   const bloodBanks = [
//     "Dhaka Medical Blood Bank",
//     "Red Crescent Blood Center",
//   ];

//   const handleSubmit = () => {
//     setLoading(true);
//     setShowResult(false);
//     setAnimateCards(false);

//     setTimeout(() => {
//       setLoading(false);
//       setShowResult(true);
//     }, 2000);
//   };

//   // Scroll based animation trigger
//   useEffect(() => {
//     if (!showResult) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setAnimateCards(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.25 }
//     );

//     if (resultRef.current) {
//       observer.observe(resultRef.current);
//     }

//     return () => observer.disconnect();
//   }, [showResult]);

//   return (
//     <section className="pt-24 pb-16 bg-[#F9FAFB] font-openS">
//       <div className="max-w-[1200px] mx-auto px-4 space-y-10">

//         {/* ALERT */}
//         <div className="bg-[#E11D48] text-white p-6 rounded-lg text-center">
//           <h1 className="text-2xl font-bold">
//             URGENT BLOOD REQUIRED
//           </h1>
//           <p className="text-sm mt-1">
//            Emergency cases are handled with priority, and no registration is required for emergency requests.
//           </p>
//         </div>

//         {/* FORM */}
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="font-bold text-[#E11D48] mb-4">
//             Emergency Blood Request
//           </h2>

//           <div className="grid md:grid-cols-2 gap-4">
//             <input
//               className="border px-4 py-2 rounded"
//               placeholder="Patient Name"
//             />

//             <select className="border px-4 py-2 rounded">
//               <option value="">Select Blood Group</option>
//               <option>A+</option>
//               <option>A-</option>
//               <option>B+</option>
//               <option>B-</option>
//               <option>O+</option>
//               <option>O-</option>
//               <option>AB+</option>
//               <option>AB-</option>
//             </select>

//             <input
//               type="number"
//               min="1"
//               className="border px-4 py-2 rounded"
//               placeholder="Units Needed"
//             />

//             <input
//               className="border px-4 py-2 rounded"
//               placeholder="Hospital Name"
//             />
//             <input
//               className="border px-4 py-2 rounded"
//               placeholder="Hospital Location"
//             />
//             <input
//               className="border px-4 py-2 rounded"
//               placeholder="Contact Number"
//             />

//             <button
//               onClick={handleSubmit}
//               className="md:col-span-2 bg-[#E11D48] text-white py-3 rounded font-semibold hover:opacity-90 transition"
//             >
//               Request Blood Now
//             </button>
//           </div>
//         </div>

//         {/* SEARCHING */}
//         {loading && (
//           <div className="text-center animate-pulse">
//             <p className="text-lg font-semibold text-gray-700">
//               🔍 Searching nearby eligible donors...
//             </p>
//             <p className="text-sm text-gray-500 mt-1">
//               Please wait a moment
//             </p>
//           </div>
//         )}

//         {/* RESULTS */}
//         {showResult && (
//           <div ref={resultRef} className="space-y-10">

//             {/* DONORS */}
//             <div>
//               <h2 className="font-bold text-lg mb-4 text-[#E11D48]">
//                 Nearby Available Donors
//               </h2>

//               <div className="grid md:grid-cols-3 gap-4">
//                 {donors.map((donor, index) => (
//                   <div
//                     key={index}
//                     style={{ animationDelay: `${index * 220}ms` }}
//                     className={`bg-white p-4 rounded-lg shadow hover:shadow-lg transition
//                       ${animateCards ? "opacity-0 animate-waveUp" : "opacity-0"}`}
//                   >
//                     <h3 className="font-bold text-[#E11D48]">
//                       {donor.bloodGroup}
//                     </h3>

//                     <p className="text-sm text-gray-600">
//                       📍 {donor.location}
//                     </p>

//                     <p className="text-sm text-gray-600 mt-1">
//                       🩸 Last Donation: {donor.lastDonationDays} days ago
//                     </p>

//                     <div className="flex gap-2 mt-4">
//                       <a
//                         href={`tel:${donor.phone}`}
//                         className="flex-1 bg-[#E11D48] text-white py-2 rounded text-center text-sm hover:opacity-90"
//                       >
//                         Call
//                       </a>
//                       <a
//                         href={`sms:${donor.phone}`}
//                         className="flex-1 bg-[#2563EB] text-white py-2 rounded text-center text-sm hover:opacity-90"
//                       >
//                         SMS
//                       </a>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* BLOOD BANKS */}
//             <div>
//               <h2 className="font-bold text-lg mb-4 text-[#E11D48]">
//                 Nearby Blood Banks
//               </h2>

//               <div className="grid md:grid-cols-2 gap-4">
//               {bloodBanks.map((bank, index) => (
//   <div
//     key={index}
//     onClick={() => alert("Coming Soon")}
//     style={{ animationDelay: `${index * 200}ms` }}
//     className={`bg-white p-4 rounded-lg shadow cursor-pointer
//       ${animateCards ? "opacity-0 animate-waveUp" : "opacity-0"}`}
//   >
//     <h3 className="font-semibold">{bank}</h3>
//     <p className="text-sm text-gray-600">
//       Emergency service available
//     </p>
//   </div>
// ))}

//               </div>
//             </div>

//           </div>
//         )}

//       </div>
//     </section>
//   );
// };

// export default Emergency;


import { useState, useEffect, useRef } from "react";

const Emergency = () => {
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false); // ✅ NEW

  const resultRef = useRef(null);

  const donors = [
    {
      name: "Rahim",
      bloodGroup: "O+",
      lastDonationDays: 120,
      phone: "01XXXXXXXXX",
      location: "Mirpur, Dhaka",
    },
    {
      name: "Karim",
      bloodGroup: "O-",
      lastDonationDays: 95,
      phone: "01XXXXXXXXX",
      location: "Mohammadpur, Dhaka",
    },
    {
      name: "Hasan",
      bloodGroup: "A+",
      lastDonationDays: 150,
      phone: "01XXXXXXXXX",
      location: "Dhanmondi, Dhaka",
    },
  ];

  const bloodBanks = [
    "Dhaka Medical Blood Bank",
    "Red Crescent Blood Center",
  ];

  const handleSubmit = () => {
    setLoading(true);
    setShowResult(false);
    setAnimateCards(false);

    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 2000);
  };

  // Scroll animation
  useEffect(() => {
    if (!showResult) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateCards(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (resultRef.current) observer.observe(resultRef.current);
    return () => observer.disconnect();
  }, [showResult]);

  return (
    <section className="pt-24 pb-16 bg-[#F9FAFB] font-openS">
      <div className="max-w-[1200px] mx-auto px-4 space-y-10">

        {/* ALERT */}
        <div className="bg-[#E11D48] text-white p-6 rounded-lg text-center">
          <h1 className="text-2xl font-bold">URGENT BLOOD REQUIRED</h1>
          <p className="text-sm mt-1">
            Emergency cases are handled with priority.
          </p>
        </div>

        {/* FORM */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-bold text-[#E11D48] mb-4">
            Emergency Blood Request
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input className="border px-4 py-2 rounded" placeholder="Patient Name" />
            <select className="border px-4 py-2 rounded">
              <option>Select Blood Group</option>
              <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
              <option>O+</option><option>O-</option><option>AB+</option><option>AB-</option>
            </select>
            <input type="number" min="1" className="border px-4 py-2 rounded" placeholder="Units Needed" />
            <input className="border px-4 py-2 rounded" placeholder="Hospital Name" />
            <input className="border px-4 py-2 rounded" placeholder="Hospital Location" />
            <input className="border px-4 py-2 rounded" placeholder="Contact Number" />

            <button
              onClick={handleSubmit}
              className="md:col-span-2 bg-[#E11D48] text-white py-3 rounded font-semibold"
            >
              Request Blood Now
            </button>
          </div>
        </div>

        {/* SEARCHING */}
        {loading && (
          <div className="text-center animate-pulse">
            <p className="text-lg font-semibold text-gray-700">
              🔍 Searching nearby eligible donors...
            </p>
          </div>
        )}

        {/* RESULTS */}
        {showResult && (
          <div ref={resultRef} className="space-y-10">

            {/* DONORS */}
            <div>
              <h2 className="font-bold text-lg mb-4 text-[#E11D48]">
                Nearby Available Donors
              </h2>

              <div className="grid md:grid-cols-3 gap-4">
                {donors.map((donor, index) => (
                  <div
                    key={index}
                    style={{ animationDelay: `${index * 200}ms` }}
                    className={`bg-white p-4 rounded-lg shadow
                      ${animateCards ? "opacity-0 animate-waveUp" : "opacity-0"}`}
                  >
                    <h3 className="font-bold text-[#E11D48]">{donor.bloodGroup}</h3>
                    <p className="text-sm text-gray-600"> {donor.location}</p>
                    <p className="text-sm text-gray-600 mt-1">
                       Last Donation: {donor.lastDonationDays} days ago
                    </p>

                    <div className="flex gap-2 mt-4">
                      <a href={`tel:${donor.phone}`} className="flex-1 bg-[#E11D48] text-white py-2 rounded text-center text-sm">
                        Call
                      </a>
                      <a href={`sms:${donor.phone}`} className="flex-1 bg-[#2563EB] text-white py-2 rounded text-center text-sm">
                        SMS
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BLOOD BANKS */}
            <div>
              <h2 className="font-bold text-lg mb-4 text-[#E11D48]">
                Nearby Blood Banks
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {bloodBanks.map((bank, index) => (
                  <div
                    key={index}
                    onClick={() => setShowComingSoon(true)}
                    style={{ animationDelay: `${index * 200}ms` }}
                    className={`bg-white p-4 rounded-lg shadow cursor-pointer
                      ${animateCards ? "opacity-0 animate-waveUp" : "opacity-0"}`}
                  >
                    <h3 className="font-semibold">{bank}</h3>
                    <p className="text-sm text-gray-600">
                      Emergency service available
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>

      {/* COMING SOON CARD */}
      {showComingSoon && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-start justify-center pt-24">
          <div className="bg-white w-[90%] max-w-sm p-6 rounded-lg shadow-lg animate-slideDown">
            <h2 className="text-xl font-bold text-[#E11D48] text-center">
            Coming Soon
            </h2>
            <p className="text-sm text-gray-600 text-center mt-2">
              Blood bank details will be available very soon.
            </p>

            <button
              onClick={() => setShowComingSoon(false)}
              className="mt-4 w-full bg-[#E11D48] text-white py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Emergency;




