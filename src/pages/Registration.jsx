import { useState } from "react";

const Registration = () => {
  const [form, setForm] = useState({
    name: "",
    userId: "",
    email: "",
    phone: "",
    bloodGroup: "",
    lastDonateDate: "",
    district: "",
    thana: "",
    password: "",
    confirmPassword: "",
    agree: true,
      altPhone: "",
  onlineType: "",
  });

  const [errors, setErrors] = useState({});
  const [strength, setStrength] = useState("");
  const [showTerms, setShowTerms] = useState(false); // ✅ TERMS CARD STATE

  // ================= PASSWORD STRENGTH =================
  const checkStrength = (v) => {
    if (v.length < 6) return "";
    return /[@$!%*#?&]/.test(v) ? "Strong" : "Medium";
  };

  // ================= VALIDATION =================
  const validate = () => {
    const e = {};

    if (!form.name.trim()) e.name = "Full name is required";

    if (!form.userId.trim() || form.userId.trim().length < 4)
      e.userId = "User ID must be at least 4 characters";

    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = "Invalid email address";
    }

    if (!form.phone.trim()) {
      e.phone = "Phone number is required";
    } else if (!/^01[3-9]\d{8}$/.test(form.phone.trim())) {
      e.phone = "Invalid Bangladesh phone number";
    }

    if (!form.bloodGroup.trim())
      e.bloodGroup = "Blood group is required";

    if (!form.lastDonateDate)
      e.lastDonateDate = "Last donation date is required";

    if (!form.district.trim())
      e.district = "District is required";

    if (!form.thana.trim())
      e.thana = "Area / Thana is required";

    if (!form.password.trim() || form.password.length < 6)
      e.password = "Password must be at least 6 characters";

    if (!form.confirmPassword.trim())
      e.confirmPassword = "Confirm password is required";
    else if (form.password !== form.confirmPassword)
      e.confirmPassword = "Passwords do not match";

    if (!form.agree)
      e.agree = "You must agree to Terms & Conditions";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ================= SUBMIT =================
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("FINAL DATA:", form);
    alert("Registration successful (demo)");
  };

  return (
    <section className="pt-16 pb-12 bg-[#F9FAFB] font-openS">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT SIDE */}
          <div className="bg-[#FFF7ED] border border-[#FED7AA] p-6 rounded-lg">
              <h2 className="text-xl font-bold text-[#E11D48] mb-4">
              Eligibility & Important Instructions
            </h2>
            <p className=" space-y-2 text-sm text-gray-700 font-openS">Before registering as a blood donor, please carefully read the following eligibility criteria and instructions.
               These rules are important to ensure donor safety and patient health.</p>

       <h2 className="text-xl font-bold text-[#E11D48] mb-2 mt-2 font-openS">
            Basic Eligibility
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 font-openS">
             <li>Age must be 18 years or above.</li>
              <li>Blood donation must be completely free.</li>
              <li>Consult a doctor before donation.</li>
            </ul>
       <h2 className="text-xl font-bold text-[#E11D48] mb-2 mt-2 font-openS">
          Who Should NOT Donate Blood
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 font-openS">
  <li>People with serious or infectious diseases should not donate.</li>
  <li>Do not donate if you have fever, infection, or severe anemia.</li>
  <li>Uncontrolled diabetes, asthma, or epilepsy patients cannot donate.</li>
            </ul>
       <h2 className="text-xl font-bold text-[#E11D48] mb-2 mt-2 font-openS">
       Recent Medical Situations
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 font-openS">
  <li>No donation after major surgery (last 6 months).</li>
  <li>No donation if you donated blood in the last 3 months.</li>
  <li>No donation after tattoo, piercing, or blood transfusion (6 months).</li>
  <li>Do not donate while taking strong or long-term medicines.</li>
            </ul>
       <h2 className="text-xl font-bold text-[#E11D48] mb-2 mt-2 font-openS">
  Special Conditions
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 font-openS">
  <li>Pregnant women or recent childbirth/miscarriage (6 months) cannot donate.</li>
  <li>Do not donate if you feel weak, dizzy, or unwell.</li>
           </ul>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white p-6 rounded-lg shadow font-openS">
            <h1 className="text-xl font-bold text-[#E11D48] mb-5 text-center ">
              Create Your Account
            </h1>

            <form onSubmit={handleSubmit} className="space-y-3">

              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Full Name</label>
                  <input
                    className="w-full border px-4 py-2 rounded"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1">User ID</label>
                  <input
                    className="w-full border px-4 py-2 rounded"
                    value={form.userId}
                    onChange={(e) => setForm({ ...form, userId: e.target.value })}
                  />
                  {errors.userId && <p className="text-xs text-red-500">{errors.userId}</p>}
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Email/Optional</label>
                  <input
                    className="w-full border px-4 py-2 rounded"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1">Phone</label>
                  <input
                    className="w-full border px-4 py-2 rounded"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                </div>
              </div>





{/* Row – Alternative Contact */}
<div className="grid md:grid-cols-2 gap-3">
  <div>
    <label className="block text-xs text-gray-600 mb-1">
      Alternative Phone
    </label>
    <input
      className="w-full border px-4 py-2 rounded"
      value={form.altPhone}
      onChange={(e) => setForm({ ...form, altPhone: e.target.value })}
    />
  </div>

  <div>
    <label className="block text-xs text-gray-600 mb-1">
      Online Contact
    </label>
    <select
      className="w-full border px-4 py-2 rounded"
      value={form.onlineType}
      onChange={(e) => setForm({ ...form, onlineType: e.target.value })}
    >
      <option value="">Select</option>
      <option value="whatsapp">WhatsApp</option>
      <option value="messenger">Messenger</option>
      <option value="telegram">Telegram</option>
    </select>
  </div>
</div>













              {/* Row 3 */}
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Blood Group</label>
                  <select
                    className="w-full border px-4 py-2 rounded"
                    value={form.bloodGroup}
                    onChange={(e) => setForm({ ...form, bloodGroup: e.target.value })}
                  >
                    <option value="">Select</option>
                    {["A+","A-","B+","B-","O+","O-","AB+","AB-"].map(bg => (
                      <option key={bg}>{bg}</option>
                    ))}
                  </select>
                  {errors.bloodGroup && <p className="text-xs text-red-500">{errors.bloodGroup}</p>}
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1">Last Donation Date</label>
                  <input
                    type="date"
                    className="w-full border px-4 py-2 rounded"
                    value={form.lastDonateDate}
                    onChange={(e) => setForm({ ...form, lastDonateDate: e.target.value })}
                  />
                  {errors.lastDonateDate && (
                    <p className="text-xs text-red-500">{errors.lastDonateDate}</p>
                  )}
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">District</label>
                  <input
                    className="w-full border px-4 py-2 rounded"
                    value={form.district}
                    onChange={(e) => setForm({ ...form, district: e.target.value })}
                  />
                  {errors.district && <p className="text-xs text-red-500">{errors.district}</p>}
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1">Area / Thana</label>
                  <input
                    className="w-full border px-4 py-2 rounded"
                    value={form.thana}
                    onChange={(e) => setForm({ ...form, thana: e.target.value })}
                  />
                  {errors.thana && <p className="text-xs text-red-500">{errors.thana}</p>}
                </div>
              </div>

              {/* Row 5 */}
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Password</label>
                  <input
                    type="password"
                    className="w-full border px-4 py-2 rounded"
                    value={form.password}
                    onChange={(e) => {
                      setForm({ ...form, password: e.target.value });
                      setStrength(checkStrength(e.target.value));
                    }}
                  />
                  {strength && (
                    <p className={`text-xs ${strength === "Strong" ? "text-green-600" : "text-yellow-500"}`}>
                      Password strength: {strength}
                    </p>
                  )}
                  {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    className="w-full border px-4 py-2 rounded"
                    value={form.confirmPassword}
                    onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                  />
                  {errors.confirmPassword && (
                    <p className="text-xs text-red-500">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>

              {/* TERMS */}
              <label className="flex gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                />
                <span>
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={() => setShowTerms(true)}
                    className="text-[#E11D48] underline"
                  >
                    Terms & Conditions
                  </button>
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-[#E11D48] text-white py-2.5 rounded font-semibold"
              >
                Register
              </button>

            </form>
          </div>
        </div>
      </div>

      {/* ================= TERMS CARD / MODAL ================= */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white max-w-lg w-full p-6 rounded-lg">
            <h2 className="text-lg font-bold text-[#E11D48] mb-3">
              Terms & Conditions
            </h2>

            <ul className="text-sm text-gray-700 space-y-2 max-h-[300px] overflow-y-auto">
              <li>• You must be at least 18 years old.</li>
              <li>• You must be medically eligible to donate blood.</li>
              <li className="text-red-600 font-medium">
                • You must NOT demand or accept any money for blood donation.
              </li>
              <li>• Blood donation is voluntary.</li>
              <li>• False information may lead to account suspension.</li>
              <li>• This platform only connects donors and patients.</li>
              <li>• Always consult a doctor before donating blood.</li>
            </ul>

            <button
              onClick={() => setShowTerms(false)}
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

export default Registration;










