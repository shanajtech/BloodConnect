// import DonorCard from "./DonorCard";

// const DonorGrid = ({ results }) => {
//   if (results.length === 0) {
//     return (
//       <p className="text-center text-gray-500">
//         No donor found
//       </p>
//     );
//   }

//   return (
   
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
//       {results.map((donor) => (
//         <DonorCard key={donor.id} donor={donor} />
//       ))}
   
//     </div>
  
//   );
// };

// export default DonorGrid;


import DonorCard from "./DonorCard";

const DonorGrid = ({ results }) => {
  if (results.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No donor selected
      </p>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        mt-10
      "
    >
      {results.map((donor) => (
        <DonorCard key={donor.id} donor={donor} />
      ))}
    </div>
  );
};

export default DonorGrid;
