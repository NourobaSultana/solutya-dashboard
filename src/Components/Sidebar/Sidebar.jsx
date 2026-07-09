import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import SidebarUserInfo from "./SidebarUserInfo";
import { MdDashboard, MdOutlineLiveHelp } from "react-icons/md";
import { FaRegFolderClosed } from "react-icons/fa6";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FiPlus, FiMoon, FiSun } from "react-icons/fi";
import { CiLogout, CiSettings } from "react-icons/ci";
const menuItems = [
  {
    title: "Dashboard",
    icon: <MdDashboard className="text-[#ACC822]" size={18} />,
  },
  {
    title: "Project",
    icon: <FaRegFolderClosed size={18} />,
  },
  {
    title: "Schedule",
    icon: <RiCalendarScheduleLine size={18} />,
  },
  {
    title: "Client",
    icon: <BsPeople size={18} />,
  },
  {
    title: "Analytics",
    icon: <TbBrandGoogleAnalytics size={18} />,
  },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const menuStyle = `flex items-center gap-3 px-4 py-3 rounded-xl
  cursor-pointer transition-all duration-300
  hover:translate-x-1`;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-all lg:hidden
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Sidebar */}
      <aside
        className={`
        fixed lg:static
        top-0 left-0
        h-auto
        p-2
        overflow-y-auto
        w-[290px]
        md:w-[300px]
        lg:w-[304px]
        z-50
        transition-all duration-300
        transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0

        ${darkMode ? "bg-[#111827] text-white" : "bg-white text-gray-800"}

        shadow-xl
      `}
      >
        {/* Mobile Header */}
        <div
          className={`flex items-center justify-between p-2 border-b lg:hidden
          ${darkMode ? "border-gray-700" : "border-gray-200"}`}
        >
          <h2 className="font-medium text-sm">Menu</h2>

          <button onClick={() => setIsOpen(false)}>
            <FaTimes size={16} />
          </button>
        </div>

        {/* Top */}
        <div className="px-6 pt-6">
          {/* User */}
          <SidebarUserInfo darkMode={darkMode} />

          <hr
            className={`my-6 ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          />

          {/* Menu */}
          <div className="space-y-3">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className={`
        flex items-center gap-3
        px-2 
        rounded-xl
        cursor-pointer
        transition-all duration-100 ease-in-out
        
        hover:shadow-sm
        hover:translate-x-2
        active:scale-[0.98]
        ${darkMode ? " hover:bg-gray-700" : "hover:bg-[#F7F8F5]"}
      `}
              >
                <span className="flex h-5 w-5 items-center justify-center">
                  {item.icon}
                </span>

                <p className="text-[16px] font-regular">{item.title}</p>
              </div>
            ))}
          </div>

          <hr
            className={`my-7 ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          />

          {/* Projects */}
          <div>
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold">My Projects</h3>

              <button className="flex items-center underline underline-offset-3 gap-1 text-[#ACC822] font-medium">
                <FiPlus />
                Add Project
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 hover:translate-x-2 duration-100 transition cursor-pointer">
                <span className="w-3 h-3 rounded bg-green-500"></span>
                <p className="text-sm">Brand Identity for Lumos</p>
              </div>

              <div className="flex items-center gap-3 hover:translate-x-2 duration-100 transition cursor-pointer">
                <span className="w-3 h-3 rounded bg-orange-500"></span>
                <p className="text-sm">Dashboard UI Design</p>s
              </div>

              <div className="flex items-center gap-3 hover:translate-x-2 duration-100 transition cursor-pointer">
                <span className="w-3 h-3 rounded bg-red-500"></span>
                <p className="text-sm">Mobile Banking App</p>
              </div>
            </div>
          </div>

          <hr
            className={`my-7 ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          />

          {/* Bottom */}
          <div className="space-y-[22px] ">
            <div className="flex items-center gap-3 cursor-pointer hover:text-[#ACC822] transition">
              <CiSettings size={22} />
              <p>Settings</p>
            </div>

            <div className="flex items-center gap-3 cursor-pointer hover:text-[#ACC822] transition">
              <MdOutlineLiveHelp size={22} />
              <p>Help & Support</p>
            </div>

            <div className="flex items-center gap-3 cursor-pointer text-[#E41C1C] transition">
              <CiLogout size={22} />
              <p>Logout</p>
            </div>
          </div>
          {/* Dark Mode */}
          <div className="mt-[73px] flex justify-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="relative flex items-center w-42 h-11 rounded-2xl bg-gray-200 p-1 transition-all duration-300"
            >
              {/* Sliding Background */}
              <span
                className={`absolute top-1 bottom-1 w-[76px] rounded-xl bg-white shadow-md transition-all duration-300 ${
                  darkMode ? "translate-x-[84px]" : "translate-x-0"
                }`}
              />

              {/* Light */}
              <div className="relative z-10 flex w-1/2 items-center justify-center gap-2 font-medium">
                <FiSun
                  size={15}
                  className={darkMode ? "text-gray-400" : "text-yellow-500"}
                />
                <span
                  className={`text-sm ${
                    darkMode ? "text-gray-500" : "text-gray-800"
                  }`}
                >
                  Light
                </span>
              </div>

              {/* Dark */}
              <div className="relative z-10 flex w-1/2 items-center justify-center gap-2 font-regular">
                <FiMoon
                  size={15}
                  className={darkMode ? "text-blue-600" : "text-gray-500"}
                />
                <span
                  className={`text-sm ${
                    darkMode ? "text-gray-800" : "text-gray-500"
                  }`}
                >
                  Dark
                </span>
              </div>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
