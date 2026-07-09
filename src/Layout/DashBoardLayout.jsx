import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import Dashboard from "../Pages/Dashboard";

const DashBoardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-full mx-auto">
        <div className="grid lg:grid-cols-[304px_1fr] grid-cols-1">
          {/* SIDEBAR */}
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

          {/* RIGHT CONTENT */}
          <div className="flex flex-col w-full ">
            <Navbar setIsSidebarOpen={setIsSidebarOpen} />

            <main className="mt-1 mx-auto w-full px-2 sm:px-6 md:px-8 lg:w-[1149px] lg:px-0 ">
              <Dashboard />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
