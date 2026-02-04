
// import { useState } from "react";
// import Container from "../components/Container";
// import locations from "../data/bdLocations.json";

// const Search = () => {
//   const bloodGroups = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];

//   const [blood, setBlood] = useState("");
//   const [division, setDivision] = useState("");
//   const [district, setDistrict] = useState("");
//   const [area, setArea] = useState("");

//   // 🔹 Data derived from JSON
//   const divisions = Object.keys(locations);
//   const districts = division ? Object.keys(locations[division]) : [];
//   const areas = division && district ? locations[division][district] : [];

//   const handleSearch = () => {
//     const searchData = { blood, division, district, area };
//     console.log("Search Data:", searchData);

//     alert(
//       `Searching for:
// Blood: ${blood}
// Division: ${division}
// District: ${district}
// Area: ${area}`
//     );
//   };

//   return (
//     <div className="bg-[#F9FAFB] min-h-screen">
//       <section className="bg-white py-10 border-b">
//         <Container className="max-w-[1200px] mx-auto px-4">

//           <h1 className="text-xl font-bold mb-6">
//             🔍 Find Blood
//           </h1>

//           {/* ================= SEARCH BAR ================= */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

//             {/* Blood Group */}
//             <select
//               value={blood}
//               onChange={(e) => setBlood(e.target.value)}
//               className="border px-3 py-2 rounded-md"
//             >
//               <option value="">Select Blood</option>
//               {bloodGroups.map((b) => (
//                 <option key={b} value={b}>{b}</option>
//               ))}
//             </select>

//             {/* Division */}
//             <select
//               value={division}
//               onChange={(e) => {
//                 setDivision(e.target.value);
//                 setDistrict("");
//                 setArea("");
//               }}
//               className="border px-3 py-2 rounded-md appearance-auto"
//             >
//               <option value="">Select Division</option>
//               {divisions.map((d) => (
//                 <option key={d} value={d}>{d}</option>
//               ))}
//             </select>

//             {/* District */}
//             <select
//               value={district}
//               onChange={(e) => {
//                 setDistrict(e.target.value);
//                 setArea("");
//               }}
//               disabled={!division}
//               className="border px-3 py-2 rounded-md disabled:bg-gray-100"
//             >
//               <option value="">Select District</option>
//               {districts.map((d) => (
//                 <option key={d} value={d}>{d}</option>
//               ))}
//             </select>

//             {/* Area / Upazila */}
//             <select
//               value={area}
//               onChange={(e) => setArea(e.target.value)}
//               disabled={!district}
//               className="border px-3 py-2 rounded-md disabled:bg-gray-100"
//             >
//               <option value="">Select Area</option>
//               {areas.map((a) => (
//                 <option key={a} value={a}>{a}</option>
//               ))}
//             </select>

//             {/* Search Button */}
//             <button
//               onClick={handleSearch}
//               className="bg-[#E11D48] text-white rounded-md px-4 py-2
//                          hover:opacity-90 transition"
//             >
//               Search
//             </button>

//           </div>

//         </Container>
//       </section>
//     </div>
//   );
// };

// export default Search;


import { useState } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import DonorGrid from "../components/DonorGrid";
import locations from "../data/bdLocations.json";
import demoDonors from "../data/demoDonors";

const Search = () => {
  const bloodGroups = ["O+","O-","A+","A-","B+","B-","AB+","AB-"];

  const [blood, setBlood] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [area, setArea] = useState("");
  const [results, setResults] = useState([]);

  const divisions = Object.keys(locations);
  const districts = division ? Object.keys(locations[division]) : [];
  const areas = division && district ? locations[division][district] : [];

  const handleSearch = () => {
    const filtered = demoDonors.filter(d =>
      (!blood || d.blood === blood) &&
      (!division || d.division === division) &&
      (!district || d.district === district) &&
      (!area || d.area === area)
    );
    setResults(filtered);
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <section className="bg-white py-10 border-b">
        <Container className="max-w-[1200px] mx-auto px-4 py-3">
          <h1 className="text-xl font-bold mb-6 font-openS"> Search Blood</h1>

          <SearchForm
            blood={blood}
            setBlood={setBlood}
            division={division}
            setDivision={setDivision}
            district={district}
            setDistrict={setDistrict}
            area={area}
            setArea={setArea}
            divisions={divisions}
            districts={districts}
            areas={areas}
            bloodGroups={bloodGroups}
            onSearch={handleSearch}
          />
        </Container>
      </section>

      <section className="py-10">
        <Container className="max-w-[1200px] mx-auto px-4 py-3">
          <DonorGrid results={results} />
        </Container>
      </section>
    </div>
  );
};

export default Search;











