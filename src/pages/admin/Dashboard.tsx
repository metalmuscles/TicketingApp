import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Calendar,
  Clock,
  Users,
  Bus,
  CreditCard,
} from "lucide-react";

const Dashboard = () => {
  // Mock data for dashboard
  const stats = [
    {
      title: "Total Sales Today",
      value: "GH₵ 12,450",
      change: "+15%",
      trend: "up",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      title: "Tickets Sold Today",
      value: "87",
      change: "+8%",
      trend: "up",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "Active Buses",
      value: "12",
      change: "0%",
      trend: "neutral",
      icon: <Bus className="h-5 w-5" />,
    },
    {
      title: "Total Passengers",
      value: "124",
      change: "-3%",
      trend: "down",
      icon: <Users className="h-5 w-5" />,
    },
  ];

  const upcomingDepartures = [
    {
      id: 1,
      route: "Accra to Kumasi",
      time: "06:00 AM",
      bus: "VIP Coach (GR 5543-20)",
      booked: 32,
      capacity: 45,
      status: "On Time",
    },
    {
      id: 2,
      route: "Accra to Cape Coast",
      time: "07:30 AM",
      bus: "STC Bus (GN 2211-19)",
      booked: 28,
      capacity: 35,
      status: "On Time",
    },
    {
      id: 3,
      route: "Accra to Tamale",
      time: "09:00 AM",
      bus: "VIP Luxury (GR 7788-21)",
      booked: 18,
      capacity: 30,
      status: "Delayed",
    },
    {
      id: 4,
      route: "Accra to Takoradi",
      time: "10:30 AM",
      bus: "OA Travel (GT 4567-18)",
      booked: 22,
      capacity: 40,
      status: "On Time",
    },
  ];

  const topRoutes = [
    { route: "Accra - Kumasi", sales: "GH₵ 45,200", tickets: 376, trend: "up" },
    { route: "Accra - Tamale", sales: "GH₵ 38,600", tickets: 193, trend: "up" },
    {
      route: "Accra - Cape Coast",
      sales: "GH₵ 22,800",
      tickets: 285,
      trend: "down",
    },
    { route: "Kumasi - Tamale", sales: "GH₵ 18,400", tickets: 92, trend: "up" },
    {
      route: "Accra - Takoradi",
      sales: "GH₵ 16,200",
      tickets: 203,
      trend: "down",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your bus operations</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex flex-col space-y-1">
                  <span className="text-muted-foreground text-sm">
                    {stat.title}
                  </span>
                  <span className="text-2xl font-bold">{stat.value}</span>
                </div>
                <div
                  className={`p-2 rounded-full ${stat.trend === "up" ? "bg-green-100" : stat.trend === "down" ? "bg-red-100" : "bg-gray-100"}`}
                >
                  {stat.icon}
                </div>
              </div>
              <div className="flex items-center mt-4">
                {stat.trend === "up" ? (
                  <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                ) : stat.trend === "down" ? (
                  <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
                ) : (
                  <span className="h-4 w-4 mr-1">-</span>
                )}
                <span
                  className={`text-sm ${stat.trend === "up" ? "text-green-500" : stat.trend === "down" ? "text-red-500" : "text-gray-500"}`}
                >
                  {stat.change} from yesterday
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Upcoming Departures */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Today's Departures</CardTitle>
            <CardDescription>Scheduled buses departing today</CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Route</th>
                  <th className="text-left py-3 px-4 font-medium">Time</th>
                  <th className="text-left py-3 px-4 font-medium">Bus</th>
                  <th className="text-left py-3 px-4 font-medium">Bookings</th>
                  <th className="text-left py-3 px-4 font-medium">Status</th>
                  <th className="text-right py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {upcomingDepartures.map((departure) => (
                  <tr key={departure.id} className="border-b">
                    <td className="py-3 px-4">{departure.route}</td>
                    <td className="py-3 px-4">{departure.time}</td>
                    <td className="py-3 px-4">{departure.bus}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-primary h-2.5 rounded-full"
                            style={{
                              width: `${(departure.booked / departure.capacity) * 100}%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-sm">
                          {departure.booked}/{departure.capacity}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${departure.status === "On Time" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                      >
                        {departure.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Routes */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Routes</CardTitle>
            <CardDescription>
              Routes with highest sales this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topRoutes.map((route, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="font-medium">{index + 1}.</div>
                    <div>
                      <div className="font-medium">{route.route}</div>
                      <div className="text-sm text-muted-foreground">
                        {route.tickets} tickets
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <div className="font-medium">{route.sales}</div>
                    </div>
                    {route.trend === "up" ? (
                      <ArrowUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDown className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Add Schedule</span>
              </Button>
              <Button className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                <Users className="h-5 w-5" />
                <span>New Booking</span>
              </Button>
              <Button
                className="h-auto py-4 flex flex-col items-center justify-center gap-2"
                variant="outline"
              >
                <Bus className="h-5 w-5" />
                <span>Manage Buses</span>
              </Button>
              <Button
                className="h-auto py-4 flex flex-col items-center justify-center gap-2"
                variant="outline"
              >
                <Clock className="h-5 w-5" />
                <span>View Reports</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
