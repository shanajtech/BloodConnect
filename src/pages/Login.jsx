// import { useState } from "react";

// const Login = () => {
//   const [loading, setLoading] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // fake login delay (backend later)
//     setTimeout(() => {
//       setLoading(false);
//       alert("Login successful (demo)");
//     }, 1500);
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-[#F9FAFB] font-openS px-4">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">

//         {/* Header */}
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-bold text-[#E11D48]">
//             Login to BloodConnect
//           </h1>
//           <p className="text-sm text-gray-600 mt-1">
//             Access your account to request or donate blood
//           </p>
//         </div>

//         {/* Login Form */}
//         <form onSubmit={handleLogin} className="space-y-4">

//           {/* Email / Phone */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email or User Id
//             </label>
//             <input
//               type="text"
//               required
            
//               className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#E11D48]"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               required
//               placeholder="Enter your password"
//               className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#E11D48]"
//             />
//           </div>

//           {/* Forgot Password */}
//           <div className="text-right">
//             <a
//               href="/forgot-password"
//               className="text-sm text-[#E11D48] hover:underline"
//             >
//               Forgot password?
//             </a>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-[#E11D48] text-white py-2.5 rounded font-semibold hover:opacity-90 transition disabled:opacity-60"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="my-6 flex items-center gap-3">
//           <div className="flex-1 h-px bg-gray-200"></div>
//           <span className="text-sm text-gray-400">OR</span>
//           <div className="flex-1 h-px bg-gray-200"></div>
//         </div>

//         {/* Register Links */}
//         <div className="text-center space-y-2 text-sm">
//           <p className="text-gray-600">
//             Don’t have an account?
//           </p>
//           <div className="flex justify-center gap-4">
//             <a
//               href="/register-donor"
//               className="text-[#E11D48] font-medium hover:underline"
//             >
//               Donor Register
//             </a>
//             <a
//               href="/register-receiver"
//               className="text-[#E11D48] font-medium hover:underline"
//             >
//               Receiver Register
//             </a>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Login;

import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [strength, setStrength] = useState("");

  // ================= PASSWORD STRENGTH =================
  const checkPasswordStrength = (value) => {
    if (value.length < 6) return "";
    return /[@$!%*#?&]/.test(value) ? "Strong" : "Medium";
  };

  // ================= FORM VALIDATION =================
  const validateForm = () => {
    const newErrors = {};

    if (!identifier.trim()) {
      newErrors.identifier = "Email or User ID is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(identifier.trim()) && identifier.trim().length < 4) {
        newErrors.identifier =
          "Enter a valid email or minimum 4 character User ID";
      }
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ================= HANDLE LOGIN =================
  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Login successful (demo)");
    }, 1500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F9FAFB] font-openS px-4 sm:px-6">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-lg shadow">

        {/* HEADER */}
        <div className="text-center mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-[#E11D48]">
            Login to BloodConnect
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Login using your Email or User ID
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-4">

          {/* Email / User ID */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email or User ID
            </label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full border px-4 py-2 rounded
                         focus:ring-2 focus:ring-[#E11D48] outline-none"
            />
            {errors.identifier && (
              <p className="text-xs text-red-500 mt-1">
                {errors.identifier}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setStrength(checkPasswordStrength(e.target.value));
              }}
              className="w-full border px-4 py-2 rounded
                         focus:ring-2 focus:ring-[#E11D48] outline-none"
            />

            {/* Strength Indicator */}
            {password.length >= 6 && (
              <p
                className={`text-xs mt-1 font-medium ${
                  strength === "Strong"
                    ? "text-green-600"
                    : "text-yellow-500"
                }`}
              >
                Password Strength: {strength}
              </p>
            )}

            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-[#E11D48] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E11D48] text-white py-2.5 rounded font-semibold
                       hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* REGISTER */}
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Don’t have an account?
          </p>
          <Link
            to="/registration"
            className="text-[#E11D48] font-medium hover:underline"
          >
            Create an account
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Login;

