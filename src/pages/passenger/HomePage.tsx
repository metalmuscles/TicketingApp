import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, Search } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const HomePage = () => {
  const [date, setDate] = React.useState<Date>();

  const featuredRoutes = [
    {
      id: 1,
      from: "Accra",
      to: "Kumasi",
      price: "GH₵ 120",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    },
    {
      id: 2,
      from: "Accra",
      to: "Tamale",
      price: "GH₵ 220",
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80",
    },
    {
      id: 3,
      from: "Accra",
      to: "Cape Coast",
      price: "GH₵ 80",
      image:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&q=80",
    },
  ];

  return (
    <div className="container mx-auto py-6 space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-lg overflow-hidden h-[400px] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80"
          alt="Bus travel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-4xl font-bold mb-4">
            Travel Ghana with Comfort and Style
          </h1>
          <p className="text-xl mb-8">
            Book your bus tickets online and enjoy a seamless journey
          </p>
          <Button size="lg">Book Now</Button>
        </div>
      </div>

      {/* Search Form */}
      <Card className="-mt-16 relative z-20 mx-4 lg:mx-auto max-w-4xl shadow-lg">
        <CardContent className="p-6">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="from">From</Label>
                <Select>
                  <SelectTrigger id="from">
                    <SelectValue placeholder="Select origin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="accra">Accra</SelectItem>
                    <SelectItem value="kumasi">Kumasi</SelectItem>
                    <SelectItem value="tamale">Tamale</SelectItem>
                    <SelectItem value="cape-coast">Cape Coast</SelectItem>
                    <SelectItem value="takoradi">Takoradi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="to">To</Label>
                <Select>
                  <SelectTrigger id="to">
                    <SelectValue placeholder="Select destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="accra">Accra</SelectItem>
                    <SelectItem value="kumasi">Kumasi</SelectItem>
                    <SelectItem value="tamale">Tamale</SelectItem>
                    <SelectItem value="cape-coast">Cape Coast</SelectItem>
                    <SelectItem value="takoradi">Takoradi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Travel Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="passengers">Passengers</Label>
                <Select>
                  <SelectTrigger id="passengers">
                    <SelectValue placeholder="Number of passengers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Passenger</SelectItem>
                    <SelectItem value="2">2 Passengers</SelectItem>
                    <SelectItem value="3">3 Passengers</SelectItem>
                    <SelectItem value="4">4 Passengers</SelectItem>
                    <SelectItem value="5">5+ Passengers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full" size="lg">
                  <Search className="mr-2 h-4 w-4" /> Search Buses
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Featured Routes */}
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-6">Popular Routes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRoutes.map((route) => (
            <Card key={route.id} className="overflow-hidden">
              <div className="h-48 relative">
                <img
                  src={route.image}
                  alt={`${route.from} to ${route.to}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">
                    {route.from} to {route.to}
                  </h3>
                  <span className="font-bold text-primary">{route.price}</span>
                </div>
                <Button variant="outline" className="w-full mt-2">
                  View Schedule
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-8 bg-muted rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Why Choose TripGh
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Convenient Booking</h3>
            <p className="text-muted-foreground">
              Book your tickets anytime, anywhere with our easy-to-use platform.
            </p>
          </div>
          <div className="text-center p-4">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
            <p className="text-muted-foreground">
              Multiple secure payment options including mobile money
              integration.
            </p>
          </div>
          <div className="text-center p-4">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Quality Service</h3>
            <p className="text-muted-foreground">
              Comfortable buses, professional drivers, and excellent customer
              support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
