// import Container from "../components/Container";
// import hero from "../assets/hero.jpg";
// import useInViewAnimation from "../hooks/useInViewAnimation";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const { ref: emergencyRef, show: emergencyShow } = useInViewAnimation();
//   const { ref: advanceRef, show: advanceShow } = useInViewAnimation();

//   return (
//     <div className="bg-[#F9FAFB]">

//       {/* ================= HERO ================= */}
//       <section className="bg-white pt-[70px] pb-[40px] sm:pt-[90px]">
//         <Container className="max-w-[1200px] mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-10">

//             {/* Left Content */}
//             <div className="animate-[fadeInLeft_0.8s_ease-out] max-w-xl">
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-openS text-[#111827]">
//                 Donate Blood,{" "}
//                 <span className="text-[#E11D48] font-openS">Save Life</span>
//               </h1>

//               <p className="mt-4 font-openS text-sm sm:text-base text-gray-600">
//                 Find emergency and planned blood requests near you — anywhere in Bangladesh.
//               </p>

//               <div className="mt-6 flex flex-col sm:flex-row gap-4">
//                 {/* ✅ FIND BLOOD */}
//                 <Link
//                   to="/search"
//                   className="px-6 py-3 bg-[#E11D48] font-openS text-white rounded-md text-center"
//                 >
//                   Find Blood
//                 </Link>

//                 {/* ✅ BECOME A DONOR */}
//                 <Link
//                   to="/registration"
//                   className="
//                     px-6 py-3
//                     border
//                     font-openS
//                     border-[#E11D48]
//                     text-[#E11D48]
//                     hover:bg-[#E11D48]
//                     hover:text-white
//                     rounded-md
//                     text-center
//                     transition
//                   "
//                 >
//                   Become a Donor
//                 </Link>
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="hidden md:block animate-[fadeInRight_0.8s_ease-out]">
//               <img
//                 src={hero}
//                 alt="hero"
//                 className="max-w-md w-full rounded-xl"
//               />
//             </div>

//           </div>
//         </Container>
//       </section>

//       {/* ================= EMERGENCY ================= */}
//       <section className="bg-white py-14 sm:py-20">
//         <Container className="max-w-[1200px] mx-auto px-4">
//           <div
//             ref={emergencyRef}
//             className={`transition-all duration-[1200ms] ease-out
//             ${emergencyShow ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
//           >
//             <h2 className="text-lg sm:text-xl font-semibold font-openS text-[#E11D48] mb-8">
//               Emergency Blood Needed
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {["O+", "A-", "B+"].map((blood, i) => (
//                 <div
//                   key={i}
//                   className="border border-[#E5E7EB] rounded-lg p-5 hover:shadow-md transition"
//                 >
//                   <span className="text-xl font-bold text-[#E11D48]">{blood}</span>
//                   <p className="text-sm mt-2 font-openS">Hospital: Dhaka Medical</p>
//                   <p className="text-sm font-openS">Location: Dhaka</p>

//                   {/* future: call / emergency action */}
//                   <button className="block mt-4 bg-[#E11D48] text-white font-openS w-full py-2 rounded-md">
//                     Call Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* ================= ADVANCE ================= */}
//       <section
//         ref={advanceRef}
//         className={`py-14 sm:py-20 bg-[#F9FAFB]
//         transition-all duration-[1200ms] ease-out
//         ${advanceShow ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
//       >
//         <Container className="max-w-[1200px] mx-auto px-4">
//           <h2 className="text-lg sm:text-xl font-openS font-semibold mb-8">
//             Upcoming Blood Requests
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {["A+", "O-", "B+"].map((blood, i) => (
//               <div
//                 key={i}
//                 className="border border-[#E5E7EB] rounded-lg p-5 bg-white hover:shadow-md"
//               >
//                 <span className="text-xl font-bold font-openS">{blood}</span>
//                 <p className="text-sm mt-2 font-openS">Purpose: Operation</p>
//                 <p className="text-sm font-openS">Date: 25 Oct 2026</p>

//                 <button className="mt-4 w-full font-openS bg-[#2563EB] text-white py-2 rounded-md">
//                   I’m Available
//                 </button>
//               </div>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* ================= WHY ================= */}
//       <section className="bg-gradient-to-b from-[#F9FAFB] to-white py-16">
//         <Container className="max-w-[1200px] mx-auto px-4">
//           <h2 className="text-xl sm:text-2xl font-bold text-center font-openS mb-12">
//             Why <span className="text-[#E11D48] font-openS">BloodConnect BD</span>?
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//             <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover:-translate-y-2 hover:shadow-lg transition">
//               <div className="h-1 w-12 bg-[#E11D48] rounded mb-4"></div>
//               <h3 className="font-semibold mb-2 font-openS">Emergency Focused</h3>
//               <p className="text-sm text-gray-600 font-openS">
//                 Designed to prioritize urgent blood needs and save lives faster.
//               </p>
//             </div>

//             <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover:-translate-y-2 hover:shadow-lg transition">
//               <div className="h-1 w-12 bg-[#2563EB] rounded mb-4"></div>
//               <h3 className="font-semibold mb-2 font-openS">Planned Support</h3>
//               <p className="text-sm text-gray-600 font-openS">
//                 Advance blood booking for operations, delivery and treatments.
//               </p>
//             </div>

//             <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover:-translate-y-2 hover:shadow-lg transition">
//               <div className="h-1 w-12 bg-[#E11D48] rounded mb-4"></div>
//               <h3 className="font-semibold mb-2 font-openS">Nationwide Coverage</h3>
//               <p className="text-sm text-gray-600 font-openS">
//                 Available across all districts of Bangladesh.
//               </p>
//             </div>

//           </div>
//         </Container>
//       </section>

//     </div>
//   );
// };

// export default Home;



import { useState } from "react";
import Container from "../components/Container";
import hero from "../assets/hero.jpg";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { Link } from "react-router-dom";

const Home = () => {
  const { ref: emergencyRef, show: emergencyShow } = useInViewAnimation();
  const { ref: advanceRef, show: advanceShow } = useInViewAnimation();

  // ✅ INFO CARD STATE (Home load holei open)
  const [showInfo, setShowInfo] = useState(true);

  return (
    <div className="bg-[#F9FAFB]">

      {/* ================= AWARENESS INFO CARD ================= */}
{showInfo && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-3 sm:px-4">
    
    {/* Modal */}
    <div
      className="
        relative w-full max-w-md sm:max-w-lg
        bg-white rounded-xl shadow-xl
        flex flex-col
        max-h-[90vh]
      "
    >
      {/* Close Button */}
      <button
        onClick={() => setShowInfo(false)}
        className="
          absolute top-3 right-3
          text-xl text-gray-500
          hover:text-black
        "
      >
        ✕
      </button>

      {/* Header */}
      <div className="px-4 sm:px-6 pt-5 pb-3 border-b">
        <h2 className="text-lg sm:text-xl font-bold text-[#E11D48] font-openS">
          Why Blood Donation Is Important
        </h2>
      </div>

      {/* Scrollable Body */}
      <div
        className="
          px-4 sm:px-6 py-4
          overflow-y-auto
          text-sm sm:text-base
          text-gray-700 font-openS
          space-y-3
        "
      >
        <p>
          Every year, many people in Bangladesh suffer or lose their lives due to shortage of blood.
        </p>

        <p>
          Blood is critically needed for surgeries, childbirth complications, accidents, cancer patients, and serious diseases.
        </p>

        <p>
          Donating blood every 3 months is safe and helps your body produce fresh and healthy blood cells.
        </p>

        <p>
          A single blood donation can save up to three lives.
        </p>

        <p className="text-red-600 font-medium">
          ⚠️ Blood donation must always be voluntary and completely free.
          Accepting money for blood donation is strictly prohibited.
        </p>
      </div>

      {/* Footer */}
      <div className="px-4 sm:px-6 pb-5 pt-3 border-t">
        <button
          onClick={() => setShowInfo(false)}
          className="
            w-full bg-[#E11D48]
            text-white py-2.5
            rounded-md font-semibold
            text-sm sm:text-base
          "
        >
          I Understand
        </button>
      </div>
    </div>
  </div>
)}



      {/* ================= HERO ================= */}
      <section className="bg-white pt-[70px] sm:pt-[90px] pb-[40px] sm:pb-[60px]">
        <Container className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">

            {/* Left Content */}
            <div className="animate-[fadeInLeft_0.8s_ease-out] max-w-xl text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-openS text-[#111827]">
                Donate Blood, <span className="text-[#E11D48]">Save Life</span>
              </h1>

              <p className="mt-4 font-openS text-sm sm:text-base text-gray-600">
                Find emergency and planned blood requests near you — anywhere in Bangladesh.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Link
                  to="/search"
                  className="px-6 py-3 bg-[#E11D48] font-openS text-white rounded-md text-center w-full sm:w-auto"
                >
                  Find Blood
                </Link>

                <Link
                  to="/registration"
                  className="px-6 py-3 border font-openS border-[#E11D48]
                             text-[#E11D48] hover:bg-[#E11D48]
                             hover:text-white rounded-md text-center transition w-full sm:w-auto"
                >
                  Become a Donor
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:block animate-[fadeInRight_0.8s_ease-out]">
              <img src={hero} alt="hero" className="max-w-md w-full rounded-xl" />
            </div>

          </div>
        </Container>
      </section>

      {/* ================= EMERGENCY ================= */}
      <section className="bg-white py-10 sm:py-14">
        <Container className="max-w-[1200px] mx-auto px-4">
          <div
            ref={emergencyRef}
            className={`transition-all duration-[1200ms] ease-out
            ${emergencyShow ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
          >
            <h2 className="text-lg sm:text-xl font-semibold font-openS text-[#E11D48] mb-6 sm:mb-8 text-center sm:text-left">
              Emergency Blood Needed
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["O+", "A-", "B+"].map((blood, i) => (
                <div
                  key={i}
                  className="border border-[#E5E7EB] rounded-lg p-5 hover:shadow-md transition flex flex-col justify-between"
                >
                  <span className="text-xl sm:text-2xl font-bold text-[#E11D48]">{blood}</span>
                  <p className="text-sm sm:text-base mt-2 font-openS">Hospital: Dhaka Medical</p>
                  <p className="text-sm sm:text-base font-openS">Location: Dhaka</p>
                  <button className="mt-4 bg-[#E11D48] text-white font-openS w-full py-2 sm:py-2.5 rounded-md">
                    Call Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ================= ADVANCE ================= */}
      <section
        ref={advanceRef}
        className={`py-10 sm:py-14 bg-[#F9FAFB]
        transition-all duration-[1200ms] ease-out
        ${advanceShow ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
      >
        <Container className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-lg sm:text-xl font-openS font-semibold mb-6 sm:mb-8 text-center sm:text-left">
            Upcoming Blood Requests
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["A+", "O-", "B+"].map((blood, i) => (
              <div
                key={i}
                className="border border-[#E5E7EB] rounded-lg p-5 bg-white hover:shadow-md flex flex-col justify-between"
              >
                <span className="text-xl sm:text-2xl font-bold font-openS">{blood}</span>
                <p className="text-sm sm:text-base mt-2 font-openS">Purpose: Operation</p>
                <p className="text-sm sm:text-base font-openS">Date: 25 Oct 2026</p>
                <button className="mt-4 w-full font-openS bg-[#2563EB] text-white py-2 sm:py-2.5 rounded-md">
                  I’m Available
                </button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= WHY ================= */}
      <section className="bg-gradient-to-b from-[#F9FAFB] to-white py-10 sm:py-16">
        <Container className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-center font-openS mb-8 sm:mb-12">
            Why <span className="text-[#E11D48] font-openS">BloodConnect BD</span>?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 sm:p-6 hover:-translate-y-2 hover:shadow-lg transition">
              <div className="h-1 w-12 bg-[#E11D48] rounded mb-3 sm:mb-4"></div>
              <h3 className="font-semibold mb-2 font-openS text-sm sm:text-base">Emergency Focused</h3>
              <p className="text-sm sm:text-base text-gray-600 font-openS">
                Designed to prioritize urgent blood needs and save lives faster.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 sm:p-6 hover:-translate-y-2 hover:shadow-lg transition">
              <div className="h-1 w-12 bg-[#2563EB] rounded mb-3 sm:mb-4"></div>
              <h3 className="font-semibold mb-2 font-openS text-sm sm:text-base">Planned Support</h3>
              <p className="text-sm sm:text-base text-gray-600 font-openS">
                Advance blood booking for operations, delivery and treatments.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 sm:p-6 hover:-translate-y-2 hover:shadow-lg transition">
              <div className="h-1 w-12 bg-[#E11D48] rounded mb-3 sm:mb-4"></div>
              <h3 className="font-semibold mb-2 font-openS text-sm sm:text-base">Nationwide Coverage</h3>
              <p className="text-sm sm:text-base text-gray-600 font-openS">
                Available across all districts of Bangladesh.
              </p>
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
};

export default Home;





