import React from "react";
import FourCard from "./DashboardSections/FourCard";
import Progress from "./DashboardSections/Progress";
import ProjectsOverview from "./DashboardSections/ProjectsOverview";

const Dashboard = () => {
  return (
    <div>
      <div className="">
        <FourCard></FourCard>
        <Progress></Progress>
        <ProjectsOverview></ProjectsOverview>
      </div>
    </div>
  );
};

export default Dashboard;
