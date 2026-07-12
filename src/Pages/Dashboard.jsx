import React from "react";
import FourCard from "./DashboardSections/FourCard";
import Progress from "./DashboardSections/Progress";
import ProjectsOverview from "./DashboardSections/ProjectsOverview";

const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
        <FourCard />
        <Progress />
        <ProjectsOverview />
      </div>
    </div>
  );
};

export default Dashboard;
