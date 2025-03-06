import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users, Filter, ArrowRight } from "lucide-react";

const SearchResults = () => {
  // Mock data for search results
  const searchResults = [
    {
      id: 1,
      busOperator: "VIP Transport",
      busType: "Executive Coach",
      departureTime: "06:00 AM",
      arrivalTime: "10:30 AM",
      duration: "4h 30m",
      price: "GH₵ 120",
      availableSeats: 23,
      amenities: ["Air Conditioning", "WiFi", "Reclining Seats"],
      rating: 4.5,
    },
    {
      id: 2,
      busOperator: "STC",
      busType: "Standard",
      departureTime: "07:30 AM",
      arrivalTime: "12:15 PM",
      duration: "4h 45m",
      price: "GH₵ 100",
      availableSeats: 15,
      amenities: ["Air Conditioning", "Reclining Seats"],
      rating: 4.2,
    },
    {
      id: 3,
      busOperator: "OA Travel & Tours",
      busType: "Luxury",
      departureTime: "09:00 AM",
      arrivalTime: "01:15 PM",
      duration: "4h 15m",
      price: "GH₵ 150",
      availableSeats: 8,
      amenities: ["Air Conditioning", "WiFi", "Reclining Seats", "Snacks"],
      rating: 4.7,
    },
    {
      id: 4,
      busOperator: "Metro Mass",
      busType: "Economy",
      departureTime: "10:30 AM",
      arrivalTime: "03:30 PM",
      duration: "5h 00m",
      price: "GH₵ 80",
      availableSeats: 32,
      amenities: ["Air Conditioning"],
      rating: 3.8,
    },
  ];

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Accra to Kumasi</h1>
          <p className="text-muted-foreground">
            Friday, June 14, 2024 • 1 Passenger
          </p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" /> Filter
        </Button>
      </div>

      <div className="flex flex-col space-y-4">
        {searchResults.map((bus) => (
          <Card key={bus.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-bold">{bus.busOperator}</h3>
                  <p className="text-sm text-muted-foreground">{bus.busType}</p>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(bus.rating) ? "fill-current" : "stroke-current fill-none"}`}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      ))}
                      <span className="ml-1 text-sm">{bus.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold">{bus.departureTime}</p>
                      <p className="text-sm text-muted-foreground">Accra</p>
                    </div>
                    <div className="hidden md:block flex-1 px-4">
                      <div className="relative flex items-center justify-center">
                        <Separator className="absolute w-full" />
                        <Badge
                          variant="outline"
                          className="relative bg-background px-2"
                        >
                          {bus.duration}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">{bus.arrivalTime}</p>
                      <p className="text-sm text-muted-foreground">Kumasi</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {bus.amenities.map((amenity, index) => (
                      <Badge key={index} variant="secondary">
                        {amenity}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Tudu Station</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{bus.availableSeats} seats left</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1 flex flex-col justify-between items-end">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">
                      {bus.price}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      per passenger
                    </p>
                  </div>
                  <Button className="mt-4 w-full md:w-auto">
                    Select Seats <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {searchResults.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">
            No buses found for this route and date
          </h3>
          <p className="text-muted-foreground mb-6">
            Try searching for a different date or route
          </p>
          <Button>Modify Search</Button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
