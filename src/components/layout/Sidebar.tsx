import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarProps {
  items: {
    title: string;
    href: string;
    icon: React.ReactNode;
  }[];
}

const Sidebar = ({ items = [] }: SidebarProps) => {
  const location = useLocation();

  return (
    <div className="hidden border-r bg-card md:block w-64 shrink-0">
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Dashboard
            </h2>
            <div className="space-y-1">
              {items.map((item) => (
                <Button
                  key={item.href}
                  variant={
                    location.pathname === item.href ? "secondary" : "ghost"
                  }
                  size="sm"
                  className={cn(
                    "w-full justify-start",
                    location.pathname === item.href && "bg-accent",
                  )}
                  asChild
                >
                  <Link to={item.href} className="flex items-center gap-2">
                    {item.icon}
                    {item.title}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
