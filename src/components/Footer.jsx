import { useState } from "react";
import { Link } from "react-router-dom";
import { MdAddIcCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
const Footer = () => {
  const [openModal, setOpenModal] = useState(null);

  return (
    <>
      <footer className="bg-[#0F172A] text-gray-300 mt-20">
        <div className="max-w-[1200px] mx-auto px-4 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              Blood<span className="text-[#E11D48]">Connect</span>
            </h2>
            <p className="text-sm text-gray-400">
              A voluntary platform connecting blood donors and patients.
              Blood donation is always free.
            </p>
          </div>

          {/* QUICK LINKS ✅ */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/search" className="hover:text-white">
                  Search Donor
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="hover:text-white">
                  Emergency
                </Link>
              </li>
              <li>
                <Link to="/advance-request" className="hover:text-white">
                  Advance Request
                </Link>
              </li>
              <li>
                <Link to="/registration" className="hover:text-white">
                  Become a Donor
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setOpenModal("terms")}
                  className="hover:text-white cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenModal("privacy")}
                  className="hover:text-white cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenModal("disclaimer")}
                  className="hover:text-white cursor-pointer"
                >
                  Disclaimer
                </button>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MdAddIcCall />
                <li> +880 1XXX-XXXXXX</li>
              </div>
              <div className="flex items-center gap-2">
              <IoMail />
                 <li> support@bloodconnectbd.com</li>
              </div>
                 <li> Bangladesh</li>
             
              
            
            
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} BloodConnect BD. Blood donation is voluntary and free.
        </div>
      </footer>

      {/* ================= MODAL ================= */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-lg w-full rounded-lg p-6">
            <h2 className="text-lg font-bold text-[#E11D48] mb-3">
              {openModal === "terms" && "Terms & Conditions"}
              {openModal === "privacy" && "Privacy Policy"}
              {openModal === "disclaimer" && "Disclaimer"}
            </h2>

            <div className="text-sm text-gray-700 space-y-2 max-h-[300px] overflow-y-auto ">
              {openModal === "terms" && (
                <>
                  <p>• You must be at least 18 years old.</p>
                  <p>• Blood donation is voluntary and free.</p>
                  <p className="text-red-600 font-medium">
                    • Accepting money for blood donation is strictly prohibited.
                  </p>
                  <p>• False information may lead to account suspension.</p>
                </>
              )}

              {openModal === "privacy" && (
                <>
                  <p>• We collect minimal personal data for donation purposes.</p>
                  <p>• Your data is never sold to third parties.</p>
                  <p>• Phone number is shared only with patients when needed.</p>
                </>
              )}

              {openModal === "disclaimer" && (
                <>
                  <p>• This platform is not a medical service.</p>
                  <p>• We do not guarantee donor availability.</p>
                  <p>• Always consult a doctor before blood donation.</p>
                </>
              )}
            </div>

            <button
              onClick={() => setOpenModal(null)}
              className="mt-4 w-full bg-[#E11D48] text-white py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;


