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
    <header className="w-full h-16 md:h-[88px] bg-white border-b border-[#E8E7EC]">
      <div className="h-full flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8">
        {/* LEFT */}
        <div className="flex items-center gap-2 sm:gap-4 flex-1">
          {/* Mobile Menu */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden w-10 h-10 rounded-xl border border-[#E8E7EC] flex items-center justify-center shrink-0"
          >
            <FaBars />
          </button>

          {/* Search */}
          <div className="relative w-full max-w-[180px] xs:max-w-[220px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px]">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full h-10 md:h-12 rounded-2xl bg-[#FAFAFA] border border-[#F3F3F3] pl-4 pr-11 text-sm outline-none focus:border-[#ACC822] transition"
            />

            <CiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
          {/* Notification */}
          <button className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#F6F6F6] flex items-center justify-center hover:shadow transition">
            <CiBellOn className="text-xl md:text-2xl" />
          </button>

          {/* Message */}
          <button className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#F6F6F6] flex items-center justify-center hover:shadow transition">
            <MdOutlineMessage className="text-lg md:text-xl" />
          </button>

          {/* Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="h-10 md:h-11 px-3 md:px-5 rounded-xl border border-[#E8E7EC] bg-[#F6F6F6] flex items-center gap-2 hover:shadow transition"
            >
              <TbCalendarMonth className="text-lg" />

              <span className="hidden md:block text-sm">{value}</span>

              <FaChevronDown
                className={`text-[10px] transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <ul className="absolute right-0 mt-3 w-40 bg-white rounded-xl border border-[#E8E7EC] shadow-lg overflow-hidden z-50">
                {options.map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      setValue(item);
                      setOpen(false);
                    }}
                    className="px-4 py-3 text-sm hover:bg-[#F8F8F8] cursor-pointer"
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
