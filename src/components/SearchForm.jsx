const SearchForm = ({
  blood,
  setBlood,
  division,
  setDivision,
  district,
  setDistrict,
  area,
  setArea,
  divisions,
  districts,
  areas,
  bloodGroups,
  onSearch,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

      <select value={blood} onChange={(e) => setBlood(e.target.value)}
        className="border px-3 py-2 rounded-md font-openS font-normal">
        <option value="" >Select Blood</option>
        {bloodGroups.map(b => <option key={b}>{b}</option>)}
      </select>

      <select value={division} onChange={(e) => {
        setDivision(e.target.value);
        setDistrict("");
        setArea("");
      }} className="border px-3 py-2 rounded-md font-openS font-normal">
        <option value="">Select Division</option>
        {divisions.map(d => <option key={d}>{d}</option>)}
      </select>

      <select value={district} disabled={!division}
        onChange={(e) => {
          setDistrict(e.target.value);
          setArea("");
        }}
        className="border px-3 py-2 rounded-md disabled:bg-gray-100 font-openS font-normal">
        <option value="">Select District</option>
        {districts.map(d => <option key={d}>{d}</option>)}
      </select>

      <select value={area} disabled={!district}
        onChange={(e) => setArea(e.target.value)}
        className="border px-3 py-2 rounded-md disabled:bg-gray-100 font-openS font-normal">
        <option value="">Select Area</option>
        {areas.map(a => <option key={a}>{a}</option>)}
      </select>

<button
  type="button"
  onClick={() => {
    alert("Search button clicked");
    onSearch();
  }}
  className="bg-[#E11D48] text-white rounded-md px-4 py-2"
>
  Search
</button>



    </div>
  );
};

export default SearchForm;

