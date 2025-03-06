import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SeatSelection = () => {
  // Mock data for bus details
  const busDetails = {
    operator: "VIP Transport",
    busType: "Executive Coach",
    from: "Accra",
    to: "Kumasi",
    date: "Friday, June 14, 2024",
    departureTime: "06:00 AM",
    price: 120,
  };

  // Generate bus layout
  const generateBusLayout = () => {
    // 12 rows, 4 seats per row (2 on each side with aisle in between)
    const layout = [];
    for (let row = 1; row <= 12; row++) {
      const rowSeats = [];
      for (let seat = 1; seat <= 4; seat++) {
        // Seat A, B on left side, C, D on right side
        const seatLetter =
          seat === 1 ? "A" : seat === 2 ? "B" : seat === 3 ? "C" : "D";
        const seatId = `${row}${seatLetter}`;

        // Randomly mark some seats as unavailable
        const unavailable = Math.random() < 0.3;

        rowSeats.push({
          id: seatId,
          number: seatId,
          status: unavailable ? "unavailable" : "available",
        });
      }
      layout.push(rowSeats);
    }
    return layout;
  };

  const [busLayout, setBusLayout] = useState(generateBusLayout());
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatId) => {
    const updatedLayout = busLayout.map((row) => {
      return row.map((seat) => {
        if (seat.id === seatId) {
          if (seat.status === "available") {
            // Add to selected seats
            setSelectedSeats([...selectedSeats, seat]);
            return { ...seat, status: "selected" };
          } else if (seat.status === "selected") {
            // Remove from selected seats
            setSelectedSeats(selectedSeats.filter((s) => s.id !== seatId));
            return { ...seat, status: "available" };
          }
        }
        return seat;
      });
    });
    setBusLayout(updatedLayout);
  };

  const totalPrice = selectedSeats.length * busDetails.price;

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Select Your Seats</h1>
          <p className="text-muted-foreground">
            {busDetails.from} to {busDetails.to} • {busDetails.date}
          </p>
        </div>
        <Button variant="outline" asChild>
          <a href="/search-results" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Results
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between">
                <span>
                  {busDetails.operator} - {busDetails.busType}
                </span>
                <span>{busDetails.departureTime}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-100 border border-green-500 rounded"></div>
                  <span className="text-sm">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-100 border border-blue-500 rounded"></div>
                  <span className="text-sm">Selected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-100 border border-gray-500 rounded"></div>
                  <span className="text-sm">Unavailable</span>
                </div>
              </div>

              {/* Bus front */}
              <div className="relative mb-8">
                <div className="w-1/2 h-12 mx-auto bg-gray-200 rounded-t-3xl flex items-center justify-center">
                  <span className="text-sm font-medium">DRIVER</span>
                </div>
              </div>

              {/* Bus seats */}
              <div className="space-y-2">
                {busLayout.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex justify-center gap-8">
                    <div className="flex gap-2">
                      {row.slice(0, 2).map((seat) => (
                        <button
                          key={seat.id}
                          disabled={seat.status === "unavailable"}
                          className={cn(
                            "w-10 h-10 rounded flex items-center justify-center text-sm font-medium transition-colors",
                            seat.status === "available" &&
                              "bg-green-100 border border-green-500 hover:bg-green-200",
                            seat.status === "selected" &&
                              "bg-blue-100 border border-blue-500",
                            seat.status === "unavailable" &&
                              "bg-gray-100 border border-gray-500 cursor-not-allowed",
                          )}
                          onClick={() => handleSeatClick(seat.id)}
                        >
                          {seat.number}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {row.slice(2, 4).map((seat) => (
                        <button
                          key={seat.id}
                          disabled={seat.status === "unavailable"}
                          className={cn(
                            "w-10 h-10 rounded flex items-center justify-center text-sm font-medium transition-colors",
                            seat.status === "available" &&
                              "bg-green-100 border border-green-500 hover:bg-green-200",
                            seat.status === "selected" &&
                              "bg-blue-100 border border-blue-500",
                            seat.status === "unavailable" &&
                              "bg-gray-100 border border-gray-500 cursor-not-allowed",
                          )}
                          onClick={() => handleSeatClick(seat.id)}
                        >
                          {seat.number}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bus rear */}
              <div className="relative mt-8">
                <div className="w-3/4 h-4 mx-auto bg-gray-200 rounded-b-lg"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Bus Operator</span>
                <span className="font-medium">{busDetails.operator}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Journey</span>
                <span className="font-medium">
                  {busDetails.from} to {busDetails.to}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date & Time</span>
                <span className="font-medium">
                  {busDetails.date}, {busDetails.departureTime}
                </span>
              </div>
              <Separator />
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Selected Seats</span>
                  <span className="font-medium">
                    {selectedSeats.length > 0
                      ? selectedSeats.map((seat) => seat.number).join(", ")
                      : "None"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Seat Price</span>
                  <span className="font-medium">
                    GH₵ {busDetails.price.toFixed(2)} × {selectedSeats.length}
                  </span>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>GH₵ {totalPrice.toFixed(2)}</span>
              </div>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Info className="h-4 w-4" />
                      <span>Booking fees may apply</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>A small booking fee may be added at checkout</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                size="lg"
                disabled={selectedSeats.length === 0}
              >
                Continue to Passenger Details{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
