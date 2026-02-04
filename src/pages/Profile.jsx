const Profile = () => {
  // demo data (backend আসলে API থেকে আসবে)
  const user = {
    name: "John Doe",
    userId: "john123",
    bloodGroup: "O+",
    phone: "01XXXXXXXXX",
    district: "Dhaka",
    lastDonateDate: "2025-10-01",
  };

  return (
    <section className="pt-20 pb-16 bg-[#F9FAFB] font-openS">
      <div className="max-w-[900px] mx-auto px-4">

        <h1 className="text-2xl font-bold text-[#E11D48] mb-6">
          My Profile
        </h1>

        <div className="bg-white rounded-lg shadow p-6 space-y-4">

          <ProfileRow label="Full Name" value={user.name} />
          <ProfileRow label="User ID" value={user.userId} />
          <ProfileRow label="Blood Group" value={user.bloodGroup} />
          <ProfileRow label="Phone" value={user.phone} />
          <ProfileRow label="District" value={user.district} />
          <ProfileRow label="Last Donation Date" value={user.lastDonateDate} />

          <button className="mt-6 bg-[#E11D48] text-white px-6 py-2 rounded">
            Edit Profile
          </button>
        </div>

      </div>
    </section>
  );
};

const ProfileRow = ({ label, value }) => (
  <div className="flex justify-between border-b pb-2 text-sm">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium">{value || "N/A"}</span>
  </div>
);

export default Profile;
