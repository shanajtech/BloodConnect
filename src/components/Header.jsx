// import { useEffect, useState } from "react";
// import Container from "./Container";
// import Flex from "./Flex";
// import Image from "./Image";
// import logo from "../assets/logo.png";

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   // 🔒 HARD SCROLL LOCK (html + body)
//   useEffect(() => {
//     const html = document.documentElement;
//     const body = document.body;

//     if (mobileOpen) {
//       html.style.overflow = "hidden";
//       body.style.overflow = "hidden";
//       body.style.height = "100vh";
//     } else {
//       html.style.overflow = "";
//       body.style.overflow = "";
//       body.style.height = "";
//     }

//     return () => {
//       html.style.overflow = "";
//       body.style.overflow = "";
//       body.style.height = "";
//     };
//   }, [mobileOpen]);

//   return (
//     <>
//       {/* ================= HEADER ================= */}
//       <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]">
//         <Container className="max-w-[1200px] mx-auto px-4 py-3">
//           <Flex className="items-center justify-between">

//             {/* Logo */}
//             <div className="flex items-center gap-3">
//               <Image
//                 imgSrc={logo}
//                 imgAlt="BloodConnect BD Logo"
//                 className="w-20"
//               />
//               <span className="text-lg font-bold text-[#111827]">
//                 Blood<span className="text-[#E11D48]">Connect</span>
//               </span>
//             </div>

//             {/* Desktop Menu */}
//             <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
//               <a href="/" className="hover:text-[#E11D48] transition">
//                 Home
//               </a>
//               <a href="/search" className="hover:text-[#E11D48] transition">
//                 Search
//               </a>
//               <a
//                 href="/emergency"
//                 className="text-[#E11D48] font-semibold"
//               >
//                 Emergency
//               </a>
//               <a
//                 href="/advance-request"
//                 className="hover:text-[#E11D48] transition"
//               >
//                 Advance Request
//               </a>
//             </nav>

//             {/* Desktop Auth (NO DROPDOWN) */}
//             <div className="hidden md:flex items-center gap-4">
//               <a
//                 href="/login"
//                 className="px-4 py-2 rounded-md transition hover:bg-[#E11D48] hover:text-white"
//               >
//                 Login
//               </a>

//               <a
//                 href="/register"
//                 className="px-4 py-2 rounded-md transition hover:bg-[#E11D48] hover:text-white"
//               >
//                 Registration
//               </a>
//             </div>

//             {/* Mobile Button */}
//             <button
//               className="md:hidden text-2xl cursor-pointer"
//               onClick={() => setMobileOpen(true)}
//             >
//               ☰
//             </button>

//           </Flex>
//         </Container>
//       </header>

//       {/* ================= OVERLAY ================= */}
//       {mobileOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40"
//           onClick={() => setMobileOpen(false)}
//         />
//       )}

//       {/* ================= MOBILE DRAWER ================= */}
//       <aside
//         className={`fixed top-0 right-0 z-50 w-[260px] bg-white h-screen
//         flex flex-col transform transition-transform duration-300 ease-in-out
//         ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         {/* Drawer Header */}
//         <div className="flex items-center justify-between px-4 py-4 border-b">
//           <span className="font-bold text-[#111827]">Menu</span>
//           <button
//             onClick={() => setMobileOpen(false)}
//             className="text-xl cursor-pointer"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Drawer Body */}
//         <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-2 text-sm font-medium">
//           {[
//             ["Home", "/"],
//             ["Search", "/search"],
//             ["Emergency", "/emergency"],
//             ["Advance Request", "/advance-request"],
//           ].map(([label, link]) => (
//             <a
//               key={label}
//               href={link}
//               className={`block px-4 py-3 rounded-md transition ${
//                 label === "Emergency"
//                   ? "bg-[#FEE2E2] text-[#E11D48]"
//                   : "hover:bg-[#E11D48] hover:text-white"
//               }`}
//               onClick={() => setMobileOpen(false)}
//             >
//               {label}
//             </a>
//           ))}

//           <hr />

//           {[
//             ["Login", "/login"],
//             ["Registration", "/register"],
//           ].map(([label, link]) => (
//             <a
//               key={label}
//               href={link}
//               className="block px-4 py-3 rounded-md hover:bg-[#E11D48] hover:text-white transition"
//               onClick={() => setMobileOpen(false)}
//             >
//               {label}
//             </a>
//           ))}
//         </nav>
//       </aside>
//     </>
//   );
// };

// export default Header;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import logo from "../assets/logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // 🔒 Scroll lock for mobile drawer
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (mobileOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.height = "100vh";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.height = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.height = "";
    };
  }, [mobileOpen]);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Search", path: "/search" },
    { label: "Emergency", path: "/emergency" },
    { label: "Advance Request", path: "/advance-request" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]">
        <Container className="max-w-[1200px] mx-auto px-4 py-3">
          <Flex className="items-center justify-between">

            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3">
              <Image imgSrc={logo} imgAlt="BloodConnect BD Logo" className="w-20" />
              <span className="text-lg font-bold text-[#111827]">
                Blood<span className="text-[#E11D48]">Connect</span>
              </span>
            </NavLink>

            {/* ================= DESKTOP MENU ================= */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative pb-1 transition
                    ${isActive
                      ? "text-[#E11D48] font-semibold"
                      : "hover:text-[#E11D48]"}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#E11D48] rounded" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* ================= DESKTOP AUTH ================= */}
            <div className="hidden md:flex items-center gap-4">
              <NavLink
                to="/login"
                className="px-4 py-2 rounded-md transition hover:bg-[#E11D48] hover:text-white"
              >
                Login
              </NavLink>

              <NavLink
                to="/registration"
                className="px-4 py-2 rounded-md transition hover:bg-[#E11D48] hover:text-white"
              >
                Registration
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl cursor-pointer"
              onClick={() => setMobileOpen(true)}
            >
              ☰
            </button>

          </Flex>
        </Container>
      </header>

      {/* ================= OVERLAY ================= */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ================= MOBILE DRAWER ================= */}
      <aside
        className={`fixed top-0 right-0 z-50 w-[260px] bg-white h-screen
        flex flex-col transform transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="font-bold text-[#111827]">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2 text-sm font-medium">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-md transition
                ${isActive
                  ? "bg-[#FEE2E2] text-[#E11D48] font-semibold"
                  : "hover:bg-[#E11D48] hover:text-white"}`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <hr />

          <NavLink
            to="/login"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 rounded-md hover:bg-[#E11D48] hover:text-white"
          >
            Login
          </NavLink>

          <NavLink
            to="/registration"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 rounded-md hover:bg-[#E11D48] hover:text-white"
          >
            Registration
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Header;






