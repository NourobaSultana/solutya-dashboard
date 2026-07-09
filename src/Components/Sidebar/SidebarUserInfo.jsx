import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const SidebarUserInfo = ({ darkMode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`px-2 py-2 rounded-2xl border transition-all duration-100 ${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-[#E8E7EC]"
      }`}
    >
      {/* USER INFO */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3"
      >
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-lg">
            NS
          </div>

          {/* Name */}
          <div className="text-left">
            <p
              className={`text-[16px] font-semibold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Nouroba Toma
            </p>

            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>

              <span
                className={`text-xs ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Online
              </span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <FaChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          } ${darkMode ? "text-gray-400" : "text-gray-500"}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="mt-4 ml-14 space-y-3">
          <p
            className={`cursor-pointer transition ${
              darkMode
                ? "text-gray-300 hover:text-[#ACC822]"
                : "text-gray-600 hover:text-[#ACC822]"
            }`}
          >
            Profile
          </p>

          <p
            className={`cursor-pointer transition ${
              darkMode
                ? "text-gray-300 hover:text-[#ACC822]"
                : "text-gray-600 hover:text-[#ACC822]"
            }`}
          >
            Settings
          </p>

          <p className="cursor-pointer text-red-500 hover:text-red-400 transition">
            Logout
          </p>
        </div>
      )}
    </div>
  );
};

export default SidebarUserInfo;
