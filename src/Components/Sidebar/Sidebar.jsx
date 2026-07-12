import { FaTimes } from "react-icons/fa";
import SidebarUserInfo from "./SidebarUserInfo";
import { MdDashboard, MdOutlineLiveHelp } from "react-icons/md";
import { FaRegFolderClosed } from "react-icons/fa6";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FiPlus, FiMoon, FiSun } from "react-icons/fi";
import { CiLogout, CiSettings } from "react-icons/ci";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const menuItems = [
  {
    title: "Dashboard",
    icon: <MdDashboard className="text-[#ACC822]" size={18} />,
  },
  { title: "Project", icon: <FaRegFolderClosed size={18} /> },
  { title: "Schedule", icon: <RiCalendarScheduleLine size={18} /> },
  { title: "Client", icon: <BsPeople size={18} /> },
  { title: "Analytics", icon: <TbBrandGoogleAnalytics size={18} /> },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { darkMode, setDarkMode } = useTheme();

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
    fixed lg:sticky
    top-0
    lg:top-0 lg:self-start
    left-0 lg:left-auto
    h-dvh
    p-2
    overflow-y-auto
    w-[85vw] max-w-[300px]
    sm:w-[300px] sm:max-w-none
    lg:w-[280px]
    xl:w-[304px]
    z-50
    transition-transform duration-300
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
        <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-6">
          {/* User */}
          <SidebarUserInfo darkMode={darkMode} />

          <hr
            className={`my-5 sm:my-6 ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          />

          {/* Menu */}
          <div className="space-y-2 sm:space-y-3">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className={`
                  flex items-center gap-3
                  px-2 py-1.5
                  rounded-xl
                  cursor-pointer
                  transition-all duration-100 ease-in-out
                  hover:shadow-sm
                  hover:translate-x-2
                  active:scale-[0.98]
                  ${darkMode ? "hover:bg-gray-700" : "hover:bg-[#F7F8F5]"}
                `}
              >
                <span className="flex h-5 w-5 items-center justify-center shrink-0">
                  {item.icon}
                </span>
                <p className="text-sm sm:text-[16px] font-regular">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <hr
            className={`my-6 sm:my-7 ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          />

          {/* Projects */}
          <div>
            <div className="flex flex-wrap justify-between items-center gap-2 mb-4 sm:mb-5">
              <h3 className="font-semibold text-sm sm:text-base">
                My Projects
              </h3>
              <button className="flex items-center underline underline-offset-3 gap-1 text-[#ACC822] font-medium text-sm whitespace-nowrap">
                <FiPlus />
                Add Project
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 hover:translate-x-2 duration-100 transition cursor-pointer">
                <span className="w-3 h-3 rounded bg-green-500 shrink-0"></span>
                <p className="text-sm truncate">Brand Identity for Lumos</p>
              </div>

              <div className="flex items-center gap-3 hover:translate-x-2 duration-100 transition cursor-pointer">
                <span className="w-3 h-3 rounded bg-orange-500 shrink-0"></span>
                <p className="text-sm truncate">Dashboard UI Design</p>
              </div>

              <div className="flex items-center gap-3 hover:translate-x-2 duration-100 transition cursor-pointer">
                <span className="w-3 h-3 rounded bg-red-500 shrink-0"></span>
                <p className="text-sm truncate">Mobile Banking App</p>
              </div>
            </div>
          </div>

          <hr
            className={`my-6 sm:my-7 ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          />

          {/* Bottom */}
          <div className="space-y-4 sm:space-y-[22px]">
            <div className="flex items-center gap-3 cursor-pointer hover:text-[#ACC822] transition">
              <CiSettings size={20} className="shrink-0" />
              <p className="text-sm sm:text-base">Settings</p>
            </div>

            <div className="flex items-center gap-3 cursor-pointer hover:text-[#ACC822] transition">
              <MdOutlineLiveHelp size={20} className="shrink-0" />
              <p className="text-sm sm:text-base">Help & Support</p>
            </div>

            <div className="flex items-center gap-3 cursor-pointer text-[#E41C1C] transition">
              <CiLogout size={20} className="shrink-0" />
              <p className="text-sm sm:text-base">Logout</p>
            </div>
          </div>

          {/* Dark Mode */}
          <div className="mt-10 sm:mt-[73px] flex justify-center">
            <div className="relative flex items-center w-full max-w-[168px] h-11 rounded-2xl bg-gray-200 p-1 transition-all duration-300">
              {/* Sliding Background (knob) */}
              <span
                className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-xl bg-white shadow-md transition-transform duration-300 pointer-events-none ${
                  darkMode ? "translate-x-full" : "translate-x-0"
                }`}
              />

              {/* Light button - always sets light, never toggles */}
              <button
                type="button"
                onClick={() => setDarkMode(false)}
                className="relative z-10 flex w-1/2 items-center justify-center gap-2 font-medium"
              >
                <FiSun
                  size={15}
                  className={darkMode ? "text-gray-400" : "text-yellow-500"}
                />
                <span
                  className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-800"}`}
                >
                  Light
                </span>
              </button>

              {/* Dark button - always sets dark, never toggles */}
              <button
                type="button"
                onClick={() => setDarkMode(true)}
                className="relative z-10 flex w-1/2 items-center justify-center gap-2 font-regular"
              >
                <FiMoon
                  size={15}
                  className={darkMode ? "text-blue-600" : "text-gray-500"}
                />
                <span
                  className={`text-sm ${darkMode ? "text-gray-800" : "text-gray-500"}`}
                >
                  Dark
                </span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
