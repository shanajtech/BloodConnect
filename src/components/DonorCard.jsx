// import Container from "./Container";

// const DonorCard = ({ donor }) => {
//   return (
  
//     <div className="bg-white rounded-xl shadow p-5 text-center">
     
//       <img
//         src={donor.image}
//         alt={donor.name}
//         className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
//       />

//       <h3 className="font-bold text-lg">{donor.name}</h3>

//       <p className="text-red-600 font-semibold text-xl">
//         {donor.blood}
//       </p>

//       <p className="text-sm text-gray-600 mt-2">
//         {donor.area}, {donor.district}
//       </p>

//       <p className="text-xs text-gray-500">
//         {donor.division}
//       </p>
 
//     </div>

//   );
// };

// export default DonorCard;

const DonorCard = ({ donor }) => {
  return (
    <div className="bg-white rounded-lg border border-[#E5E7EB] p-5 flex flex-col gap-4  hover:shadow-md">

      {/* Top content */}
      <div className="flex items-center justify-between gap-4">

        {/* Left Info */}
        <div>
          <h2 className="text-xl font-bold text-red-600">
            {donor.blood}
          </h2>

          <p className="text-sm text-gray-700 mt-2">
            <span className="font-semibold font-openS">Hospital:</span>{" "}
            {donor.hospital || "Dhaka Medical"}
          </p>

          <p className="text-sm text-gray-500">
            <span className="font-semibold font-openS">Location:</span>{" "}
            {donor.area}, {donor.district}
          </p>
        </div>

        {/* Right Image */}
        <img
          src={donor.image}
          alt={donor.name}
          className="w-16 h-16 rounded-full object-cover border"
        />
      </div>

      {/* Call Button */}
      <button
        className="block mt-4 bg-[#E11D48] text-white font-openS text-center py-2 rounded-md"
      >
        Call Now
      </button>

    </div>
  );
};

export default DonorCard;
