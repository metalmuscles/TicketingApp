import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  Download,
  MapPin,
  QrCode,
  Share2,
} from "lucide-react";

const MyBookings = () => {
  // Mock data for bookings
  const upcomingBookings = [
    {
      id: "TG-24061-5AB",
      from: "Accra",
      to: "Kumasi",
      date: "June 14, 2024",
      time: "06:00 AM",
      operator: "VIP Transport",
      seats: ["5A", "5B"],
      status: "confirmed",
    },
    {
      id: "TG-24072-3CD",
      from: "Kumasi",
      to: "Accra",
      date: "June 20, 2024",
      time: "10:30 AM",
      operator: "STC",
      seats: ["7C"],
      status: "confirmed",
    },
  ];

  const pastBookings = [
    {
      id: "TG-24045-2EF",
      from: "Accra",
      to: "Cape Coast",
      date: "May 15, 2024",
      time: "08:00 AM",
      operator: "VIP Transport",
      seats: ["3E"],
      status: "completed",
    },
    {
      id: "TG-24032-1GH",
      from: "Cape Coast",
      to: "Accra",
      date: "May 18, 2024",
      time: "04:30 PM",
      operator: "OA Travel & Tours",
      seats: ["10G"],
      status: "completed",
    },
    {
      id: "TG-24021-9IJ",
      from: "Accra",
      to: "Tamale",
      date: "April 5, 2024",
      time: "07:00 AM",
      operator: "STC",
      seats: ["12I", "12J"],
      status: "cancelled",
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-500">Confirmed</Badge>;
      case "completed":
        return (
          <Badge variant="outline" className="border-green-500 text-green-500">
            Completed
          </Badge>
        );
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">Processing</Badge>;
    }
  };

  const BookingCard = ({ booking }) => (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">
              {booking.from} to {booking.to}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{booking.operator}</p>
          </div>
          {getStatusBadge(booking.status)}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{booking.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{booking.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>Tudu Station</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Seats:</span>
            <span>{booking.seats.join(", ")}</span>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">
            Booking Reference: <span className="font-medium">{booking.id}</span>
          </p>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="flex gap-2 w-full">
          {booking.status === "confirmed" && (
            <>
              <Button variant="outline" className="flex-1 gap-1">
                <QrCode className="h-4 w-4" /> View Ticket
              </Button>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </>
          )}
          {booking.status === "completed" && (
            <>
              <Button variant="outline" className="flex-1">
                Book Again
              </Button>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </>
          )}
          {booking.status === "cancelled" && (
            <Button variant="outline" className="flex-1">
              View Details
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">My Bookings</h1>
        <p className="text-muted-foreground">
          View and manage your bus tickets
        </p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="upcoming">Upcoming Trips</TabsTrigger>
          <TabsTrigger value="past">Past Trips</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {upcomingBookings.length > 0 ? (
            upcomingBookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">No upcoming trips</h3>
              <p className="text-muted-foreground mb-6">
                You don't have any upcoming bus trips booked
              </p>
              <Button>Book a Trip</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          {pastBookings.length > 0 ? (
            pastBookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">No past trips</h3>
              <p className="text-muted-foreground mb-6">
                You don't have any past bus trips
              </p>
              <Button>Book a Trip</Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyBookings;
