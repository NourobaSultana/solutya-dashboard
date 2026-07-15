import React from "react";
import FourCard from "./DashboardSections/FourCard";
import Progress from "./DashboardSections/Progress";
import ProjectsOverview from "./DashboardSections/ProjectsOverview";
import { useTheme } from "../Components/ThemeProvider/ThemeProvider";

const Dashboard = () => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`w-full  border-2 p-2 rounded-tr-2xl rounded-tl-2xl transition-colors duration-300 ${
        darkMode ? "bg-[#0F172A] border-[#334155]" : " border-[#E8E7EC]"
      }`}
    >
      <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
        <FourCard />
        <Progress />
        <ProjectsOverview />
      </div>
    </div>
  );
};

export default Dashboard;
