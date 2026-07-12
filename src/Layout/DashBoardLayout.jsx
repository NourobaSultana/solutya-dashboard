import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import Dashboard from "../Pages/Dashboard";
import { ThemeProvider } from "../Components/ThemeProvider/ThemeProvider";

const DashBoardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#E8E7EC]">
        <div className="w-full mx-auto">
          <div className="grid lg:grid-cols-[304px_1fr]">
            {/* SIDEBAR */}
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            {/* RIGHT CONTENT */}
            <div className="min-w-0 flex flex-col">
              <Navbar setIsSidebarOpen={setIsSidebarOpen} />

              <main className="w-full p-6">
                <Dashboard />
              </main>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DashBoardLayout;
