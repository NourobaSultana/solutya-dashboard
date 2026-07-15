import React, { useEffect, useRef, useState } from "react";
import { CiBellOn, CiSearch } from "react-icons/ci";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { TbCalendarMonth } from "react-icons/tb";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const Navbar = ({ setIsSidebarOpen }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Monthly");
  const { darkMode } = useTheme();
  const dropdownRef = useRef(null);

  const options = ["Daily", "Weekly", "Monthly", "Yearly"];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`w-full h-16 md:h-[88px] border-b transition-colors duration-300
  ${darkMode ? "bg-[#111827] border-gray-700" : "bg-white border-[#E8E7EC]"}`}
    >
      <div className="h-full flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8">
        {/* LEFT */}
        <div className="flex items-center gap-2 sm:gap-4 flex-1">
          {/* Mobile Menu */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition
  ${
    darkMode
      ? "border border-gray-700 bg-[#1F2937] text-gray-200"
      : "border border-[#E8E7EC] bg-white text-[#374151]"
  }`}
          >
            <FaBars />
          </button>

          {/* Search */}
          <div className="relative w-full max-w-[180px] xs:max-w-[220px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px]">
            <input
              type="text"
              placeholder="Search here..."
              className={`w-full h-10 md:h-12 rounded-2xl pl-4 pr-11 text-sm outline-none transition
  ${
    darkMode
      ? "bg-[#1F2937] border border-gray-700 text-white placeholder:text-gray-400"
      : "bg-[#FAFAFA] border border-[#F3F3F3] text-gray-700"
  }`}
            />

            <CiSearch
              className={`absolute right-4 top-1/2 -translate-y-1/2 text-xl
  ${darkMode ? "text-gray-400" : "text-gray-500"}`}
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
          {/* Notification */}
          <button
            className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition
  ${
    darkMode ? "bg-[#1F2937] hover:bg-[#374151]" : "bg-[#F6F6F6] hover:shadow"
  }`}
          >
            <CiBellOn
              className={`text-xl md:text-2xl ${
                darkMode ? "text-gray-200" : "text-[#4B5563]"
              }`}
            />
          </button>

          {/* Message */}
          <button
            className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition
  ${
    darkMode ? "bg-[#1F2937] hover:bg-[#374151]" : "bg-[#F6F6F6] hover:shadow"
  }`}
          >
            <MdOutlineMessage
              className={`text-lg md:text-xl ${
                darkMode ? "text-gray-200" : "text-[#4B5563]"
              }`}
            />
          </button>

          {/* Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setOpen(!open)}
              className={`h-10 md:h-11 px-3 md:px-5 rounded-xl border flex items-center gap-2 transition hover:shadow ${
                darkMode
                  ? "bg-[#111827] border-gray-700 text-white hover:bg-[#1F2937]"
                  : "bg-[#F6F6F6] border-[#E8E7EC] text-black"
              }`}
            >
              <TbCalendarMonth
                className={`text-lg ${
                  darkMode ? "text-[#ACC822]" : "text-black"
                }`}
              />

              <span
                className={`hidden md:block text-sm ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                {value}
              </span>

              <FaChevronDown
                className={`text-[10px] transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                } ${darkMode ? "text-white" : "text-black"}`}
              />
            </button>

            {open && (
              <ul
                className={`absolute right-0 mt-3 w-40 rounded-xl border shadow-lg overflow-hidden z-50 ${
                  darkMode
                    ? "bg-[#1F2937] border-gray-700"
                    : "bg-white border-[#E8E7EC]"
                }`}
              >
                {options.map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      setValue(item);
                      setOpen(false);
                    }}
                    className={`px-4 py-3 text-sm cursor-pointer transition-colors ${
                      darkMode
                        ? "text-white hover:bg-[#374151]"
                        : "text-black hover:bg-[#F8F8F8]"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
