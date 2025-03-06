import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import routes from "tempo-routes";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/admin/Dashboard";
import RouteManagement from "./pages/admin/RouteManagement";
import HomePage from "./pages/passenger/HomePage";
import SearchResults from "./pages/passenger/SearchResults";
import SeatSelection from "./pages/passenger/SeatSelection";
import PassengerDetails from "./pages/passenger/PassengerDetails";
import Payment from "./pages/passenger/Payment";
import MyBookings from "./pages/passenger/MyBookings";
import {
  LayoutDashboard,
  Route as RouteIcon,
  Bus,
  Calendar,
  CreditCard,
  Users,
} from "lucide-react";

function App() {
  const adminSidebarItems = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: <LayoutDashboard className="h-4 w-4" />,
    },
    {
      title: "Route Management",
      href: "/admin/routes",
      icon: <RouteIcon className="h-4 w-4" />,
    },
    {
      title: "Bus Scheduling",
      href: "/admin/scheduling",
      icon: <Bus className="h-4 w-4" />,
    },
    {
      title: "Ticket Management",
      href: "/admin/tickets",
      icon: <Calendar className="h-4 w-4" />,
    },
    {
      title: "Sales Analytics",
      href: "/admin/analytics",
      icon: <CreditCard className="h-4 w-4" />,
    },
    {
      title: "User Management",
      href: "/admin/users",
      icon: <Users className="h-4 w-4" />,
    },
  ];

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          {/* Passenger Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/seat-selection" element={<SeatSelection />} />
          <Route path="/passenger-details" element={<PassengerDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/bookings" element={<MyBookings />} />

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={<MainLayout sidebarItems={adminSidebarItems} />}
          >
            <Route index element={<Dashboard />} />
            <Route path="routes" element={<RouteManagement />} />
            {/* Other admin routes would go here */}
          </Route>
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
