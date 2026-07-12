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
    <header className="w-full h-[88px] bg-white border-b border-[#E8E7EC] flex items-center">
      <div className="w-full px-4 md:px-6 lg:px-8 flex justify-between items-center">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden w-10 h-10 rounded-xl border border-[#E8E7EC] flex justify-center items-center"
          >
            <FaBars />
          </button>

          {/* Search */}
          <div className="relative w-[180px] sm:w-[250px] md:w-[300px] lg:w-[340px]">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full h-12 rounded-2xl  bg-[#FAFAFA] pl-4 pr-12  text-sm"
            />

            <CiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* Notification */}
          <button className="w-11 h-11 rounded-full border border-[#F6F6F6] bg-[#F6F6F6] flex justify-center items-center hover:shadow-sm duration-200">
            <CiBellOn className="text-2xl" />
          </button>

          {/* Message */}
          <button className="w-11 h-11 rounded-full border border-[#F6F6F6] bg-[#F6F6F6] flex justify-center items-center hover:shadow-sm duration-200">
            <MdOutlineMessage className="text-xl" />
          </button>

          {/* Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="h-11 px-5 border border-[#E8E7EC] rounded-xl flex items-center gap-2 bg-[#F6F6F6] hover:shadow-sm duration-200"
            >
              <TbCalendarMonth className="text-xl" />

              <span className="hidden sm:block text-[15px] font-medium">
                {value}
              </span>

              <FaChevronDown
                className={`text-xs transition-all ${open ? "rotate-180" : ""}`}
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
                    className="px-4 py-3 hover:bg-[#F8F8F8] cursor-pointer text-sm"
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
