import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import Dashboard from "../Pages/Dashboard";
import { ThemeProvider } from "../Components/ThemeProvider/ThemeProvider";
import Footer from "../Components/Footer/Footer";

const DashBoardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#E8E7EC] ">
        <div className="w-full mx-auto">
          <div className="grid lg:grid-cols-[304px_1fr]">
            {/* SIDEBAR */}
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            {/* RIGHT CONTENT */}
            <div className="min-w-0 flex flex-col ">
              <Navbar setIsSidebarOpen={setIsSidebarOpen} />

              <div className="px-4 ">
                <main className="w-full  mt-4 ">
                  <Dashboard />
                </main>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DashBoardLayout;
