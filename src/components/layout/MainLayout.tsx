import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  sidebarItems?: {
    title: string;
    href: string;
    icon: React.ReactNode;
  }[];
  showSidebar?: boolean;
}

const MainLayout = ({
  sidebarItems = [],
  showSidebar = true,
}: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        {showSidebar && <Sidebar items={sidebarItems} />}
        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
