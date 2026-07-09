import React, { useEffect, useRef, useState } from "react";
import { CiBellOn, CiSearch } from "react-icons/ci";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { TbCalendarMonth } from "react-icons/tb";

const Navbar = ({ setIsSidebarOpen }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Monthly");
  const dropdownRef = useRef(null);

  const options = ["Daily", "Weekly", "Monthly", "Yearly"];

  // 🔹 CLOSE DROPDOWN WHEN CLICKING OUTSIDE
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
    <header className="bg-white w-full ">
      <div
        className="
          px-4 md:px-6 lg:px-8
          py-4 lg:py-6
          flex items-center justify-between
          gap-3
        "
      >
        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">
          {/* ☰ SIDEBAR BUTTON (SM & MD ONLY) */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-md bg-gray-100"
          >
            <FaBars />
          </button>

          {/* SEARCH */}
          <div
            className="
              relative
              w-[160px] sm:w-[220px] md:w-[260px] lg:w-[320px]
              h-[44px]
            "
          >
            <input
              type="text"
              placeholder="Search here..."
              className="input input-bordered w-full pr-10 h-full"
            />
            <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {/* Bell */}
          <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-100">
            <CiBellOn className="text-lg md:text-xl" />
          </div>

          {/* Message */}
          <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-100">
            <MdOutlineMessage className="text-lg md:text-xl" />
          </div>

          {/* DROPDOWN */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="
                flex items-center gap-1 sm:gap-2
                px-3 sm:px-4 py-2
                rounded-full bg-gray-100 hover:bg-gray-200 transition
              "
            >
              <TbCalendarMonth className="text-lg" />

              <span className="hidden sm:block font-medium text-sm">
                {value}
              </span>

              <FaChevronDown
                className={`text-xs transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <ul className="absolute right-0 mt-2 w-36 bg-white border rounded-lg shadow-lg z-50">
                {options.map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      setValue(item);
                      setOpen(false);
                    }}
                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
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
