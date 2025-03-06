import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, User, Bell } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">TripGh</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/routes"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Routes
          </Link>
          <Link
            to="/bookings"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            My Bookings
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="default" size="sm" asChild>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
